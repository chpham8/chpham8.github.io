"use strict";

function itemCreator(id, name, price, type, image, description){
    this.id = id;
    this.name = name;
    this.price = price;
    this.type = type;
    this.image = image;
    this.description = description;
}

let content = document.getElementById('content');
let cartBar = document.getElementById('cartBar');
let checkout = document.getElementById('checkout');

let switchConsole = new itemCreator("n1", "Nintendo Switch", 299, "console", "images/switch.jpg", "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.");
let dsConsole = new itemCreator("n2", "Nintendo 3DS", 100, "console", "images/3ds.jpg", "Experience incredible gameplay featuring real 3D graphics, with no need for special glasses. Nintendo 3DS is a breakthrough in portable entertainment, a truly cutting-edge piece of hardware. It has to be seen to be believed.");
let joyCon = new itemCreator("n3", "Nintendo Switch Joy-Con", 79, "accessory", "images/joycon.jpg", "Introducing Joy-Con, controllers that make new kinds of gaming possible, for use with Nintendo Switch.The versatile Joy-Con offer multiple surprising new ways for players to have fun. Two Joy-Con can be used independently in each hand, or together as one game controller when attached to the Joy-Con grip. They can also attach to the main console for use in handheld mode, or be shared with friends to enjoy two-player action in supported games.");
let proCon = new itemCreator("n4", "Nintendo Switch Pro Controller", 60, "accessory", "images/procon.jpg", "Take your game sessions up a notch with the Pro Controller. Includes motion controls, HD rumble, built-in amiibo functionality, and more.");
let smashBro = new itemCreator("n5", "Super Smash Bros. Ultimate", 60, "game", "images/smashbros.jpg", "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!");
let marioKart = new itemCreator("n6", "Mario Kart 9 Deluxe", 60, "game", "images/mariokart.jpg", "Hit the road with the definitive version of Mario Kart 9 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode.")

let items = [switchConsole, dsConsole, joyCon, proCon, smashBro, marioKart];

let cartButton = document.getElementsByClassName("addToCart");
let qtyNum = document.getElementsByClassName('quantity');

let cartItems =[];
let cartQty = [];
let cartTotal = 0;

for (let i = 0; i<items.length; i++) {
    let itemContainer = document.createElement("div");
    itemContainer.className = 'contentItems';
    itemContainer.id = items[i].id;
    let img = document.createElement('img');
    img.src = items[i].image;
    itemContainer.appendChild(img);
    let list = document.createElement('ul');
    let item = document.createElement('li');
    let name = document.createTextNode(items[i].name);
    item.appendChild(name);
    list.appendChild(item);
    item = document.createElement('li');
    let price = document.createTextNode("$" + items[i].price);
    item.appendChild(price);
    list.appendChild(item);

    item = document.createElement('li');
    let form = document.createElement('form');
    let select = document.createElement("select");
    select.className = "quantity";
    for (let j = 1; j < 10; j++) {
        let option = document.createElement("option");
        option.value = j;
        let optionText = document.createTextNode(j);
        option.appendChild(optionText);
        select.appendChild(option);
    }
    form.appendChild(select);
    let button = document.createElement('button');
    button.value=items[i].id;
    button.type='button';
    button.className="addToCart";
    let buttonText =document.createTextNode("add to cart");
    button.appendChild(buttonText);
    form.appendChild(button);
    item.appendChild(form);
    list.appendChild(item);

    item = document.createElement('li');
    let description = document.createTextNode(items[i].description);
    item.appendChild(description);
    list.appendChild(item);
    itemContainer.appendChild(list);
    content.appendChild(itemContainer);
}

for(let j = 0; j < items.length; j++) {
    cartButton[j].addEventListener('click', (event) => {
        let obj = items.find(o => o.id === cartButton[j].value);
        cartItems.push(obj);
        cartView(j);
    });
}

function cartView(k) {
        let itemContainer = document.createElement("div");
        itemContainer.className = 'cartItems';
        let list = document.createElement('ul');
        let item = document.createElement('li');
        let name = document.createTextNode(cartItems[k].name);
        item.appendChild(name);
        list.appendChild(item);
        item = document.createElement('li');
        let qty = document.createTextNode("qty: " + qtyNum[k].value);
        item.appendChild(qty);
        list.appendChild(item);
        itemContainer.appendChild(list);
        cartBar.appendChild(itemContainer);
        cartQty.push(qtyNum[k].value);
}

checkout.addEventListener('click', (event) => {
    for (let l=0; l < cartItems.length; l++){
        cartTotal += (cartItems[l].price * cartQty[l]);
        console.log(cartItems[l].price);
        console.log(cartQty[l]);

    }   console.log(cartTotal);

    let productName = "";
    for(let i = 0; i < cartItems.length; i++) {
        productName += cartItems[i].name + ', Qty: ' + cartQty[i] + '\n';
        console.log(productName);

    }
    alert('Receipt\n' + 'Items:\n'+ productName + '\nTotal: $' + + cartTotal.toFixed(2));

        cartTotal = 0;
        console.log(cartTotal);


});