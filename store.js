"use strict";

function itemCreator(name, price, type, image, description){
    this.name = name;
    this.price = price;
    this.type = type;
    this.image = image;
    this.description = description;
}

let content = document.getElementById('content');

let switchConsole = new itemCreator("Nintendo Switch", 299, "console", "image", "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.");
let dsConsole = new itemCreator("Nintendo 3DS", 100, "console", "image", "Experience incredible gameplay featuring real 3D graphics, with no need for special glasses. Nintendo 3DS is a breakthrough in portable entertainment, a truly cutting-edge piece of hardware. It has to be seen to be believed.");
let joyCon = new itemCreator("Nintendo Switch Joy-Con", 79, "accessory", "image", "Introducing Joy-Con, controllers that make new kinds of gaming possible, for use with Nintendo Switch.The versatile Joy-Con offer multiple surprising new ways for players to have fun. Two Joy-Con can be used independently in each hand, or together as one game controller when attached to the Joy-Con grip. They can also attach to the main console for use in handheld mode, or be shared with friends to enjoy two-player action in supported games.");
let proCon = new itemCreator("Nintendo Switch Pro Controller", 60, "accessory", "image", "Take your game sessions up a notch with the Pro Controller. Includes motion controls, HD rumble, built-in amiibo functionality, and more.");
let smashBro = new itemCreator("Super Smash Bros. Ultimate", 60, "game", "image", "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!");
let marioKart = new itemCreator("Mario Kart 9 Deluxe", 60, "game", "image", "Hit the road with the definitive version of Mario Kart 9 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode.")

let items = [switchConsole, dsConsole, joyCon, proCon, smashBro, marioKart];

for (let i = 0; i<items.length; i++) {
    let para = document.createElement("P");
    let name = document.createTextNode(items[i].name);
    let price = document.createTextNode(items[i].price);
    para.appendChild(name);
    para.appendChild(price);
    content.appendChild(para);
}
