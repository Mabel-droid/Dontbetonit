function preload() {
  cardset = loadImage("./sprites/set.png");
  chips = loadImage("./sprites/chip.png");
}

function restockitems() {
  // criador de items

  if (level == 1) {
    name = "WATCH";
    price = 500;
    spriteX = 0;
    spriteY = 0;
    desc = `"Made of gold."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "SUIT";
    price = 350;
    spriteX = 1;
    spriteY = 0;
    desc = `"It's new too."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "SHIRT";
    price = 200;
    spriteX = 2;
    spriteY = 0;
    desc = `"Hope it's not cold."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "PANTS";
    price = 250;
    spriteX = 3;
    spriteY = 0;
    desc = `"How much is your dignity worth?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "RING";
    price = 400;
    spriteX = 4;
    spriteY = 0;
    desc = `"A symbol of love."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 2) {
    name = "TV";
    price = 5000;
    spriteX = 5;
    spriteY = 0;
    desc = `"Who even watches TV nowadays?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "FRIDGE";
    price = 3000;
    spriteX = 0;
    spriteY = 1;
    desc = `"The light inside does actually work with magic."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "PHONE";
    price = 8000;
    spriteX = 1;
    spriteY = 1;
    desc = `"You got any games on your phone?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "STOCKS";
    price = 4500;
    spriteX = 2;
    spriteY = 1;
    desc = `"They're not gaining value anyways."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 3) {
    name = "CAR";
    price = 12000;
    spriteX = 3;
    spriteY = 1;
    desc = `"Vroom vroom."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "HOUSE";
    price = 24000;
    spriteX = 4;
    spriteY = 1;
    desc = `"Oh, sick, it has a pool!"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "ID";
    price = 10000;
    spriteX = 5;
    spriteY = 1;
    desc = `"I could find some use for this."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "JOB";
    price = 20000;
    spriteX = 0;
    spriteY = 2;
    desc = `"And you were just about to be promoted!"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 4) {
    name = "EYEBALL";
    price = 27000;
    spriteX = 1;
    spriteY = 2;
    desc = `"Your eyeball."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 5) {
    name = "THUMB";
    price = 30000;
    spriteX = 2;
    spriteY = 2;
    desc = `"Only reason we can stir mac and cheese."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "INDEX FINGER";
    price = 30000;
    spriteX = 3;
    spriteY = 2;
    desc = `"I dare you to point out one flaw of not having it."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "RING FINGER";
    price = 30000;
    spriteX = 4;
    spriteY = 2;
    desc = `"Already sold your ring, might as well."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "MIDDLE FINGER";
    price = 30000;
    spriteX = 5;
    spriteY = 2;
    desc = `"Bitch."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "PINKY FINGER";
    price = 30000;
    spriteX = 0;
    spriteY = 3;
    desc = `"The little brother of fingers."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 6) {
    name = "KIDNEY";
    price = 50000;
    spriteX = 1;
    spriteY = 3;
    desc = `"Looks like a bean innit?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "LUNG";
    price = 80000;
    spriteX = 2;
    spriteY = 3;
    desc = `"Most breathtaking part of human anatomy."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "LIVER";
    price = 40000;
    spriteX = 3;
    spriteY = 3;
    desc = `"It grows back."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "RIB";
    price = 30000;
    spriteX = 4;
    spriteY = 3;
    desc = `"You have 11 more."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 7) {
    name = "DOG";
    price = 200000;
    spriteX = 5;
    spriteY = 3;
    desc = `"Insert John Wick reference."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "BABY";
    price = 250000;
    spriteX = 0;
    spriteY = 4;
    desc = `"Why does it look like that?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "WIFE";
    price = 400000;
    spriteX = 1;
    spriteY = 4;
    desc = `"Hey is your wife single?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);

    name = "BEST FRIEND";
    price = 300000;
    spriteX = 2;
    spriteY = 4;
    desc = `"Your best friend Paul. You know him. You know what he's about."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 8) {
    name = "SOUL";
    price = 999999999;
    spriteX = 3;
    spriteY = 4;
    desc = `"Your soul."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 9) {
    name = "WOW";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"You sold everything you had."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 10) {
    name = "WAS IT WORTH IT?";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"Probably not."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 11) {
    name = "LET'S LOOK AT WHAT YOU DID";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"So you feel better. Maybe."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 12) {
    name = "YOUR HIGHEST WIN STREAK";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"You won ${nfc(nf(streakscore, 0, 0))} times in a row."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 13) {
    name = "YOUR HIGHEST AMOUNT OF MONEY";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"You had ${nfc(
      nf(cashscore, 0, 0)
    )} at one point. Where'd it go wrong?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }

  if (level == 14) {
    name = "YOUR LOWEST AMOUNT OF MONEY";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"And then you went down to ${nfc(nf(debtscore, 0, 0))}. Oof."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }
  
  if (level == 15) {
    name = "IT'S OVER";
    price = 0;
    spriteX = 5;
    spriteY = 5;
    desc = `"Would you undo it all if you could?"`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }
  
  if (level == 16) {
    name = "MEMORIES";
    price = "everything";
    spriteX = 4;
    spriteY = 4;
    desc = `"Cogito ergo sum."`;
    item = new Item(name, price, spriteX, spriteY, desc);
    items.push(item);
  }
}
