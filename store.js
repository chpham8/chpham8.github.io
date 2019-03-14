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
let cartBar = document.getElementById('cart');
let checkout = document.getElementById('checkoutBox');
let allFilter = document.getElementById('all');
let consolesFilter = document.getElementById('consoles');
let accessoriesFilter = document.getElementById('accessories');
let gameFilter = document.getElementById('games');
let total = document.getElementById('total');
let emptyMessage = document.getElementById('emptyCart');

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
let filter = [];
let cartTotal = 0;

displayContent(items);
addCartButton(items);
emptyCart();

function addCartButton(array) {
    for (let i = 0; i < array.length; i++) {
        cartButton[i].addEventListener('click', (event) => {
            let obj = array.find(o => o.id === cartButton[i].value);
            cartItems.push(obj);
            let index = cartItems.indexOf(obj);
            let itemIndex = i;
            console.log(index);
            cartView(index, itemIndex);
            calcCartTotal();
            total.innerText = 'Subtotal: ' + '$' + cartTotal.toFixed(2);
            emptyMessage.style.visibility = 'hidden';
            emptyMessage.style.position = 'fixed';
            checkout.style.visibility = 'visible';
        })
    }
}

function cartView(index, itemIndex) {
        let itemContainer = document.createElement("div");
        itemContainer.className = 'cartItems';
        let img = document.createElement('img');
        img.src = cartItems[index].image;
        itemContainer.appendChild(img);
        let list = document.createElement('ul');
        let item = document.createElement('li');
        let h4 = document.createElement('h4');
        let name = document.createTextNode(cartItems[index].name);
        h4.appendChild(name);
        item.appendChild(h4);
        list.appendChild(item);
        item = document.createElement('li');
        let qty = document.createTextNode("Quantity: " + qtyNum[itemIndex].value);
        item.appendChild(qty);
        list.appendChild(item);
        itemContainer.appendChild(list);
        cartBar.appendChild(itemContainer);
        cartQty.push(qtyNum[itemIndex].value);
}

allFilter.addEventListener('click', (event) => {
   removeContent(content);
   displayContent(items);
   addCartButton(items);
   allFilter.className = 'is-active';
   consolesFilter.className = '';
   accessoriesFilter.className = '';
   gameFilter.className = '';
});

consolesFilter.addEventListener('click', (event) => {
    removeContent(content);
    filter = [];
    filterContent('console', items);
    displayContent(filter);
    addCartButton(filter);
    allFilter.className = '';
    consolesFilter.className = 'is-active';
    accessoriesFilter.className = '';
    gameFilter.className = '';

});

accessoriesFilter.addEventListener('click', (event) => {
   removeContent(content);
   filter = [];
   filterContent('accessory', items);
   displayContent(filter);
   addCartButton(filter);
   allFilter.className = '';
   consolesFilter.className = '';
   accessoriesFilter.className = 'is-active';
   gameFilter.className = '';
});

gameFilter.addEventListener('click', (event) => {
   removeContent(content);
   filter = [];
   filterContent('game', items);
   displayContent(filter);
   addCartButton(filter);
   allFilter.className = '';
   consolesFilter.className = '';
   accessoriesFilter.className = '';
   gameFilter.className = 'is-active';
});

function displayContent(array) {
    for (let n = 0; n<array.length; n++) {
        let itemContainer = document.createElement("div");
        itemContainer.className = 'contentItems';
        itemContainer.id = array[n].id;
        let img = document.createElement('img');
        img.src = array[n].image;
        img.id = 'img' + array[n].id;
        itemContainer.appendChild(img);
        let list = document.createElement('ul');
        let item = document.createElement('li');
        let h3 = document.createElement('h3');
        let name = document.createTextNode(array[n].name);
        h3.appendChild(name);
        item.appendChild(h3);
        list.appendChild(item);
        item = document.createElement('li');
        let price = document.createTextNode("$" + array[n].price);
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
        button.value=array[n].id;
        button.type='button';
        button.className="addToCart";
        let buttonText =document.createTextNode("add to cart");
        button.appendChild(buttonText);
        form.appendChild(button);
        item.appendChild(form);
        list.appendChild(item);

        item = document.createElement('li');
        let description = document.createTextNode(array[n].description);
        item.appendChild(description);
        list.appendChild(item);
        itemContainer.appendChild(list);
        content.appendChild(itemContainer);
    }
}

function removeContent(container) {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function filterContent(type, array){
    for (let o=0; o<array.length; o++) {
        if (array[o].type === type) {
            filter.push(array[o]);
        }
    }
    console.log(filter);
}

let modal = document.getElementById('myModal');
let modalContent = document.getElementById("modal-content");
let span = document.getElementsByClassName("close")[0];


let container = document.createElement("div");
let text = document.createElement("p");
let contentDisplay = document.createTextNode("Thank you for shopping!\nReceipt: ") ;
text.appendChild(contentDisplay);
container.appendChild(text);
modalContent.appendChild(container);

checkout.addEventListener('click', (event) => {
    calcCartTotal();

    let productName = "";
    for(let i = 0; i < cartItems.length; i++) {
        productName += cartItems[i].name + ', Qty: ' + cartQty[i] + '\n';
        console.log(productName);
        let container = document.createElement("div");
        let text = document.createElement("p");
        let content = document.createTextNode(cartItems[i].name + ' qty: ' + cartQty[i] + '\n $' + cartItems[i].price) ;
        console.log(productName);
        text.appendChild(content);
        container.appendChild(text);
        modalContent.appendChild(container);

    }

    container = document.createElement("div");
    text = document.createElement("p");
    content = document.createTextNode('Total: $' + cartTotal.toFixed(2)) ;
    console.log(productName);
    text.appendChild(content);
    container.appendChild(text);
    modalContent.appendChild(container);


    modal.style.display= "block";

    // if(event.target == modal) {
    //     modal.style.display = "none";
    // }
    // let closeWindow = document.createElement("span");
    // closeWindow.spanName = 'close'[0];

    // alert('Receipt\n' + 'Items:\n'+ productName + '\nTotal: $' + + cartTotal.toFixed(2));

    emptyCart();
});

span.addEventListener('click', (event) => {
    modal.style.display = "none";
})

function calcCartTotal(){
    cartTotal = 0;
    for (let l=0; l < cartItems.length; l++){
        cartTotal += (cartItems[l].price * cartQty[l]);
    }
}

function emptyCart() {
    cartTotal = 0;
    removeContent(cartBar);
    cartItems =[];
    total.innerText = ' ';
    checkout.style.visibility = 'hidden';
    emptyMessage.style.visibility = 'visible';
    emptyMessage.style.position = 'static';
}