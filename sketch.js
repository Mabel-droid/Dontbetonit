let cards = [],
  dcards = [],
  items = [],
  total = 0,
  dealer = 0,
  poke,
  moke,
  xc,
  dxc,
  cx,
  dcx,
  state = "start",
  record = false,
  cash = 200,
  displaycash = 0,
  displayloss = 0,
  rcash = false,
  screen = "game",
  name,
  price,
  sprite,
  item,
  itempick = 1,
  pick = false,
  opa = 0,
  flash = 255,
  phone,
  bx,
  by,
  bw,
  bh,
  bx2,
  by2,
  bidamount = 100,
  level = 0,
  cashscore = 0,
  debtscore = 0,
  streak = 0,
  streakscore = 0;

function setup() {
  if (windowHeight > windowWidth) {
    phone = true;

    if (windowWidth > map(9, 0, 16, 0, windowHeight)) {
      resizeCanvas(map(9, 0, 16, 0, windowHeight), windowHeight);
    } else {
      resizeCanvas(windowWidth, map(16, 0, 9, 0, windowWidth));
    }
  } else {
    phone = false;

    if (windowHeight > map(9, 0, 16, 0, windowWidth)) {
      resizeCanvas(windowWidth, map(9, 0, 16, 0, windowWidth));
    } else {
      resizeCanvas(map(16, 0, 9, 0, windowHeight), windowHeight);
    }
  }

  if (state != "start") {
    if (state != "debt") {
      cards.splice(0, cards.length);
      dcards.splice(0, dcards.length);
      rcash = false;
      for (i = 0; i < 2; i++) {
        let v = int(random(1, 11));
        let s = int(random(0, 4));
        let card = new Card(v, s, cx);
        cards.push(card);
        console.log(card);
        console.log(v + s);
      }
      total = cards.reduce((sum, card) => sum + card.v, 0);
      console.log(`Player: ${total}`);
      for (i = 0; i < 2; i++) {
        let dv = int(random(1, 11));
        let ds = int(random(0, 4));
        let dcard = new DCard(dv, ds);
        dcards.push(dcard);
        console.log(dcard);
        console.log(dv + ds);
      }
      dealer = dcards.reduce((sum, dcard) => sum + dcard.dv, 0);
      console.log(`Dealer: ${dealer}`);
    }
    state = "play";
  }
}
//fim setup

function draw() {
  //textFont(fatassPixels);

  if (state == "start") {
    background(0, 0, 0);
    fill(255, 0, 0);
    textSize(width / 10);
    textAlign(CENTER, CENTER);
    text("Don't Bet On It", width / 2, height / 2);
    fill(255);
    textSize(width / 20);
    text("Click to start", width / 2, height / 2 + width / 10);
    if (mouseIsPressed == true) {
      state = "play";
      setup();
    }
  } else {
    background(50, 50, 50);
    flash = lerp(flash, 0, 0.2);

    if (streak > streakscore) {
      streakscore = streak;
    }

    if (cash > cashscore) {
      cashscore = cash;
    }
    if (cash < debtscore) {
      debtscore = cash;
    }

    if (items.length == 0) {
      level++;
      restockitems();
    }

    if (cash > bidamount * 3) {
      bidamount = floor(int(cash / 3) / 10) * 10;
    }

    if (cash > 1000) {
      background(
        map(cash, 1000, 50000, 50, 255),
        map(cash, 1000, 50000, 50, 0),
        map(cash, 1000, 50000, 50, 0),
        opa
      );
      opa++;
    }

    if (total == 21) {
      state = "win";
    }

    poke = width / 10;
    moke = width / 100;
    xc = width - poke / 2;
    dxc = width - poke / 2;

    if (phone == false) {
      bx = poke / 1.2;
      by = height - poke / 2;
      bw = poke * 1.2;
      bh = poke / 2;
      bx2 = bx * 3;
      by2 = by;
    } else {
      bx = poke * 2;
      by = height - poke * 1.5;
      bw = poke * 3;
      bh = poke * 2;
      bx2 = bx;
      by2 = by - poke * 2.5;
    }

    for (let i = 0; i < cards.length; i++) {
      cx = 80 * i;
    }

    for (let i = 0; i < dcards.length; i++) {
      dcx = 80 * i;
    }

    if (phone == false) {
      image(
        cardset,
        width / 2,
        height / 2,
        (moke / 1.5) * 12,
        (moke / 1.5) * 16,
        0,
        160,
        120,
        160
      );
    } else {
      image(
        cardset,
        width / 2,
        height / 2,
        (moke / 1.5) * 24,
        (moke / 1.5) * 32,
        0,
        160,
        120,
        160
      );
    }

    for (i = 0; i < cards.length; i++) {
      cards[i].show(i * 40);
    }

    for (i = 0; i < dcards.length; i++) {
      dcards[i].show(i * 40);
    }

    stroke(0);
    if (phone == false) {
      ts = width / 35;

      strokeWeight(width / 155);
      textSize(ts);
      text(total, xc, height - poke / 1.5);
      text(dealer, dxc, poke / 1.5);
    } else {
      ts = height / 35;

      strokeWeight(height / 155);
      textSize(ts);
      text(total, xc - poke, height - poke * 1.5);
      text(dealer, dxc - poke, poke * 1.5);
    }
    if (phone == false) {
      textSize(width / 15);
    } else {
      textSize(height / 15);
    }
    if (displaycash > 0) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    textAlign(LEFT, CENTER);

    displaycash = lerp(displaycash, cash, 0.1);
    displayloss = lerp(displayloss, bidamount, 0.1);

    text(`${nfc(nf(displaycash, 0, 0))}`, poke / 5, ts * 1.5);

    textSize(ts * 1.5);
    fill(255, 0, 0);
    text(`${nfc(nf(displayloss, 0, 0))}`, poke / 5, ts * 3.5);

    stroke(255);

    rectMode(CENTER);
    if (
      mouseX < bx + bw / 2 &&
      mouseX > bx - bw / 2 &&
      mouseY < by + bh / 2 &&
      mouseY > by - bh / 2
    ) {
      if (mouseIsPressed == true) {
        fill(100, 0, 0);
      } else {
        fill(200, 0, 0);
      }
    } else {
      fill(0);
    }
    rect(bx, by, bw, bh);
    if (
      mouseX < bx2 + bw / 2 &&
      mouseX > bx2 - bw / 2 &&
      mouseY < by2 + bh / 2 &&
      mouseY > by2 - bh / 2
    ) {
      if (mouseIsPressed == true) {
        fill(100, 0, 0);
      } else {
        fill(200, 0, 0);
      }
    } else {
      fill(0);
    }
    rect(bx2, by2, bw, bh);
    textAlign(CENTER, CENTER);
    textSize(ts);
    fill(255);
    noStroke();
    text("HIT", bx, by);
    text("STAND", bx2, by2);

    if (state != "play" && state != "stand") {
      stroke(255);
      if (
        mouseX < width / 2 + width / 3 / 2 &&
        mouseX > width / 2 - width / 3 / 2 &&
        mouseY < height / 2 + height / 3 / 2 &&
        mouseY > height / 2 - height / 3 / 2 &&
        state != "debt"
      ) {
        if (mouseIsPressed == true) {
          fill(100, 0, 0);
        } else {
          fill(200, 0, 0);
        }
      } else {
        fill(0);
      }
      rect(width / 2, height / 2, width / 3, height / 3);
      fill(255);
      noStroke();
      if (state == "win") {
        fill(0, 255, 0);
        text("YOU WIN", width / 2, height / 2 - height / 20);
        fill(255);
        text("ANOTHER GAME?", width / 2, height / 2 + height / 20);

        if (rcash == false) {
          cash += bidamount;
          rcash = true;
        }
      } else if (state == "lose") {
        fill(255, 0, 0);
        text("YOU LOSE", width / 2, height / 2 - height / 20);
        fill(255);
        text("ANOTHER GAME?", width / 2, height / 2 + height / 20);

        if (rcash == false) {
          cash -= bidamount;
          rcash = true;
        }
      } else if (state == "tie") {
        fill(255, 0, 0);
        text("WE TIED", width / 2, height / 2 - height / 20);
        fill(255);
        text("ANOTHER GAME?", width / 2, height / 2 + height / 20);
      } else if (state == "debt") {
        if (pick == false) {
          itempick = int(random(items.length - 1));
          pick = true;
        }
        stroke(255);
        if (
          mouseX < width / 2 + width / 3 / 2 &&
          mouseX > width / 2 - width / 3 / 2 &&
          mouseY < height / 2 + height / 1.5 / 2 &&
          mouseY > height / 2 - height / 1.5 / 2
        ) {
          if (mouseIsPressed == true) {
            fill(100, 0, 0);
          } else {
            fill(200, 0, 0);
          }
        } else {
          fill(0);
        }
        rect(width / 2, height / 2, width / 3, height / 1.5);
        noStroke();
        fill(255, 0, 0);
        text("YOU'RE IN DEBT", width / 2, height / 4);

        items[itempick].show();
      }
    }

    if (state != "debt") {
      pick = false;
    }

    textSize(width / 35);

    total = cards.reduce((sum, card) => sum + card.v, 0);

    if (total > 21) {
      state = "lose";
    }

    if (state != "play" && record == false) {
      console.log(state);
      record = true;
    }

    dealer = dcards.reduce((sum, dcard) => sum + dcard.dv, 0);

    if (state == "stand") {
      if (dealer < 17) {
        let dv;
        if (cash > 1500 && dealer > 9) {
          dv = 21 - dealer;
        } else {
          dv = int(random(1, 11));
        }

        let ds = int(random(0, 4));
        let = 80 * dcards.length;
        let dcard = new DCard(dv, ds);
        dcards.push(dcard);
        console.log(dcard);
        console.log(dv + ds);

        dealer = dcards.reduce((sum, dcard) => sum + dcard.dv, 0);
        console.log(`Dealer: ${dealer}`);
      } else if (dealer > 21 || total > dealer) {
        record = false;
        streak++;
        state = "win";
      } else if (total == dealer) {
        record = false;
        streak = 0;
        state = "tie";
      } else {
        record = false;
        streak = 0;
        state = "lose";
      }
    }

    if (cash <= 0) {
      state = "debt";
    }

    fill(255, 255, 255, flash);
    noStroke();
    rect(width / 2, height / 2, width, height);

    fill(255);
  }
}
//fim draw

function mousePressed() {
  if (state == "play") {
    if (
      mouseX < bx + bw / 2 &&
      mouseX > bx - bw / 2 &&
      mouseY < by + bh / 2 &&
      mouseY > by - bh / 2
    ) {
      for (i = 0; i < 1; i++) {
        let v = int(random(1, 11));
        let s = int(random(1, 4));
        let cx = 80 * cards.length;
        let card = new Card(v, s, cx);
        cards.push(card);
        console.log(card);
        console.log(v + s);
      }
    } else if (
      mouseX < bx2 + bw / 2 &&
      mouseX > bx2 - bw / 2 &&
      mouseY < by2 + bh / 2 &&
      mouseY > by2 - bh / 2
    ) {
      state = "stand";
    }
    total = cards.reduce((sum, card) => sum + card.v, 0);
    console.log(`Player: ${total}`);
    dealer = dcards.reduce((sum, dcard) => sum + dcard.dv, 0);
    console.log(`Dealer: ${dealer}`);
  } else if (
    mouseX < width / 2 + width / 3 / 2 &&
    mouseX > width / 2 - width / 3 / 2 &&
    mouseY < height / 2 + height / 1.5 / 2 &&
    mouseY > height / 2 - height / 1.5 / 2
  ) {
    if (state == "debt") {
      if (level == 16) {
        resetsketch();
      } else {
        cash += items[itempick].price;
        console.log(`Sold ${items[itempick].name}`);
        items.splice(itempick, 1);
        setup();
      }
    } else if (
      mouseX < width / 2 + width / 3 / 2 &&
      mouseX > width / 2 - width / 3 / 2 &&
      mouseY < height / 2 + height / 1.5 / 2 &&
      mouseY > height / 2 - height / 1.5 / 2 &&
      state != "debt"
    ) {
      setup();
    }
  }
}

function windowResized() {
  if (windowHeight > windowWidth) {
    phone = true;

    if (windowWidth > map(9, 0, 16, 0, windowHeight)) {
      resizeCanvas(map(9, 0, 16, 0, windowHeight), windowHeight);
    } else {
      resizeCanvas(windowWidth, map(16, 0, 9, 0, windowWidth));
    }
  } else {
    phone = false;

    if (windowHeight > map(9, 0, 16, 0, windowWidth)) {
      resizeCanvas(windowWidth, map(9, 0, 16, 0, windowWidth));
    } else {
      resizeCanvas(map(16, 0, 9, 0, windowHeight), windowHeight);
    }
  }
}

class Card {
  constructor(v, s) {
    this.v = v;
    this.s = s;
  }

  show(index) {
    imageMode(CENTER);
    if (phone == false) {
      image(
        cardset,
        xc - (index * moke) / 13.5,
        height - poke / 1.5,
        (moke / 1.5) * 12,
        (moke / 1.5) * 16,
        120 * this.v,
        160 * this.s,
        120,
        160
      );
    } else {
      image(
        cardset,
        xc - poke - (index * moke) / 13.5,
        height - poke * 1.5,
        (moke / 1.5) * 24,
        (moke / 1.5) * 32,
        120 * this.v,
        160 * this.s,
        120,
        160
      );
    }
  }
}

class DCard {
  constructor(dv, ds) {
    this.dv = dv;
    this.ds = ds;
  }

  show(index) {
    imageMode(CENTER);
    if (phone == false) {
      image(
        cardset,
        dxc - (index * moke) / 13.5,
        poke / 1.5,
        (moke / 1.5) * 12,
        (moke / 1.5) * 16,
        120 * this.dv,
        160 * this.ds,
        120,
        160
      );
    } else {
      image(
        cardset,
        dxc - poke - (index * moke) / 13.5,
        poke * 1.5,
        (moke / 1.5) * 24,
        (moke / 1.5) * 32,
        120 * this.dv,
        160 * this.ds,
        120,
        160
      );
    }
  }
}

class Item {
  constructor(name, price, spriteX, spriteY, desc) {
    this.name = name;
    this.price = price;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.desc = desc;
  }

  show() {
    fill(255);
    let sell = `SELL THIS ITEM FOR ${nfc(this.price)}?`;
    if (sell.length > 17) {
      textSize(width / (sell.length * 2));
    } else {
      textSize(width / 35);
    }
    text(sell, width / 2, height / 3.25);
    if (this.name.length > 17) {
      textSize(width / (this.name.length * 2));
    } else {
      textSize(width / 35);
    }
    text(this.name, width / 2, height / 2.7);

    textSize(width / 50);

    text(this.desc, width / 2, height / 2.3, width / 3.5);
    imageMode(CENTER);
    image(
      chips,
      width / 2,
      height / 1.55,
      width / 6,
      width / 6,
      160 * this.spriteX,
      160 * this.spriteY,
      160,
      160
    );
  }
}

function resetsketch() {
  (cards = []),
    (dcards = []),
    (items = []),
    (total = 0),
    (dealer = 0),
    (state = "play"),
    (record = false),
    (cash = 200),
    (displaycash = cash),
    (displayloss = 100),
    (rcash = false),
    (screen = "game"),
    (itempick = 1),
    (pick = false),
    (opa = 0),
    (flash = 255),
    (bidamount = 100),
    (level = 0),
    (cashscore = 0),
    (debtscore = 0),
    (streak = 0),
    (streakscore = 0);
  setup();
}
