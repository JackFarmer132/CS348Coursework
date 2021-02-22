function getProductDetails() {
  productDetails = {};
  productDetails["carrots"] = {};
  productDetails["carrots"]["images"] = ["img/carrots/carrot1.jpg", "img/carrots/carrot2.jpg", "img/carrots/carrot3.jpg", "img/carrots/carrot4.jpg", "img/carrots/carrot5.jpeg"];
  productDetails["carrots"]["page"] = "carrots.html";
  productDetails["carrots"]["name"] = "Carrots";
  productDetails["carrots"]["description"] = "not just for rabbits";
  productDetails["carrots"]["units"] = "kg";
  productDetails["carrots"]["price"] = 4.95;
  productDetails["carrots"]["pricePerUnit"] = 0.99;

  productDetails["bananas"] = {};
  productDetails["bananas"]["images"] = ["img/bananas/banana1.jpg", "img/bananas/banana2.jpg", "img/bananas/banana3.jpg", "img/bananas/banana4.jpg", "img/bananas/banana5.jpg"];
  productDetails["bananas"]["page"] = "bananas.html";
  productDetails["bananas"]["name"] = "Bananas";
  productDetails["bananas"]["description"] = "Yellow and banana-shaped";
  productDetails["bananas"]["units"] = "500g";
  productDetails["bananas"]["price"] = 6.98;
  productDetails["bananas"]["pricePerUnit"] = 1.29;

  productDetails["coconut"] = {};
  productDetails["coconut"]["images"] = ["img/coconuts/coconut1.jpg", "img/coconuts/coconut2.jpg", "img/coconuts/coconut3.jpg", "img/coconuts/coconut4.jpg", "img/coconuts/coconut5.jpg"];
  productDetails["coconut"]["page"] = "coconut.html";
  productDetails["coconut"]["name"] = "Coconut";
  productDetails["coconut"]["description"] = "That exotic stuff";
  productDetails["coconut"]["units"] = "unit";
  productDetails["coconut"]["price"] = 5.98;
  productDetails["coconut"]["pricePerUnit"] = 2.99;

  productDetails["apples"] = {};
  productDetails["apples"]["images"] = ["img/apples/apple1.jpg", "img/apples/apple2.jpg", "img/apples/apple3.jpg", "img/apples/apple4.jpg", "img/apples/apple5.jpg"];
  productDetails["apples"]["page"] = "apples.html";
  productDetails["apples"]["name"] = "Apples";
  productDetails["apples"]["description"] = "Red, sweet and juicy";
  productDetails["apples"]["units"] = "kg";
  productDetails["apples"]["price"] = 3.99;
  productDetails["apples"]["pricePerUnit"] = 1.49;

  productDetails["cherries"] = {};
  productDetails["cherries"]["images"] = ["img/cherries/cherry1.jpg", "img/cherries/cherry2.jpg", "img/cherries/cherry3.jpg", "img/cherries/cherry4.jpg", "img/cherries/cherry5.jpg"];
  productDetails["cherries"]["page"] = "cherries.html";
  productDetails["cherries"]["name"] = "Cherries";
  productDetails["cherries"]["description"] = "Cherry pancake anyone?";
  productDetails["cherries"]["units"] = "500g";
  productDetails["cherries"]["price"] = 0.99;
  productDetails["cherries"]["pricePerUnit"] = 1.99;

  productDetails["tomatoes"] = {};
  productDetails["tomatoes"]["images"] = ["img/tomatoes/tomato1.jpg", "img/tomatoes/tomato2.jpg", "img/tomatoes/tomato3.jpg", "img/tomatoes/tomato4.jpg", "img/tomatoes/tomato5.jpg"];
  productDetails["tomatoes"]["page"] = "tomatoes.html";
  productDetails["tomatoes"]["name"] = "Tomatoes";
  productDetails["tomatoes"]["description"] = "Red and ripe";
  productDetails["tomatoes"]["units"] = "500g";
  productDetails["tomatoes"]["price"] = 16.99;
  productDetails["tomatoes"]["pricePerUnit"] = 1.99;

  productDetails["potatoes"] = {};
  productDetails["potatoes"]["images"] = ["img/potatoes/potato1.jpg", "img/potatoes/potato2.jpg", "img/potatoes/potato3.jpg", "img/potatoes/potato4.jpg", "img/potatoes/potato5.jpg"];
  productDetails["potatoes"]["page"] = "potatoes.html";
  productDetails["potatoes"]["name"] = "Potatoes";
  productDetails["potatoes"]["description"] = "Boil them, bake them, mash them...";
  productDetails["potatoes"]["units"] = "kg";
  productDetails["potatoes"]["price"] = 8.61;
  productDetails["potatoes"]["pricePerUnit"] = 0.99;

  productDetails["beans"] = {};
  productDetails["beans"]["images"] = ["img/beans/bean1.jpg", "img/beans/bean2.jpg", "img/beans/bean3.jpg", "img/beans/bean4.jpg", "img/beans/bean5.jpg"];
  productDetails["beans"]["page"] = "beans.html";
  productDetails["beans"]["name"] = "Beans";
  productDetails["beans"]["description"] = "Green and healthy";
  productDetails["beans"]["units"] = "kg";
  productDetails["beans"]["price"] = 41.01;
  productDetails["beans"]["pricePerUnit"] = 1.29;

  return productDetails;
}

function getProductList() {
  var products = [];
  var productDetails = getProductDetails();

  for (var key in productDetails) {
    products.push(key);
  }

  return products;
}

function getProductQuantity(product) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + product + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function readBasket() {
  var basket = {};
  products = getProductList();
  var productcount = products.length;
  for (var i = 0; i < productcount; i++) {
    basket[products[i]] = getProductQuantity(products[i]);
  }

  return basket;
}

function calculateTotals() {
  var basket = readBasket();
  var productDetails = getProductDetails();

  total = 0;
  for (var product in basket) {
    total += parseInt(basket[product]) * parseFloat(productDetails[product]["price"]);
  }

  totals = {};
  totals["total"] = total.toString();
  totals["vat"] = (total - total / 1.175).toString();
  totals["totalnovat"] = (total / 1.175).toString();

  return totals;
}

function addToBasket(product, quantity) {
  if (document.cookie.indexOf(product) == -1) {
    createEmptyBasket();
  }

  oldquantity = parseInt(getProductQuantity(product));
  newquantity = oldquantity + parseInt(quantity);

  document.cookie = product + "=" + newquantity.toString() + ";path=/";
}

function removeProductFromBasket(product) {
  document.cookie = product + "=0;path=/";
}

function changeProductQuantity(product, newquantity) {
  document.cookie = product + "=" + newquantity.toString() + ";path=/";
}

function createEmptyBasket() {
  products = getProductList();
  var productcount = products.length;
  for (var i = 0; i < productcount; i++) {
    document.cookie=products[i] + "=0;path=/";
  }
}

function createEmptyOrder() {
  document.cookie="title=;path=/";
  document.cookie="firstname=;path=/";
  document.cookie="surname=;path=/";
  document.cookie="number=;path=/";
  document.cookie="street=;path=/";
  document.cookie="postcode=;path=/";
  document.cookie="city=;path=/";
  document.cookie="country=;path=/";
  document.cookie="cardtype=;path=/";
  document.cookie="cardnumber=;path=/";
  document.cookie="month=;path=/";
  document.cookie="year=;path=/";
}

function setName() {
  document.cookie="title=" + document.getElementById('title').value + ";path=/";
  document.cookie="firstname=" + document.getElementById('firstname').value + ";path=/";
  document.cookie="surname=" + document.getElementById('surname').value + ";path=/";
}

function getName() {
  var name = {};
  name["title"] = getCookieVariableValue('title');
  name["firstname"] = getCookieVariableValue('firstname');
  name["surname"] = getCookieVariableValue('surname');

  return name;
}

function setAddress() {
  document.cookie="number=" + document.getElementById('number').value + ";path=/";
  document.cookie="street=" + document.getElementById('street').value + ";path=/";
  document.cookie="postcode=" + document.getElementById('postcode').value + ";path=/";
  document.cookie="city=" + document.getElementById('city').value + ";path=/";
  document.cookie="country=" + document.getElementById('country').value + ";path=/";
}

function getAddress() {
  var address = {};
  address["number"] = getCookieVariableValue('number');
  address["street"] = getCookieVariableValue('street');
  address["postcode"] = getCookieVariableValue('postcode');
  address["city"] = getCookieVariableValue('city');
  address["country"] = getCookieVariableValue('country');

  return address;
}

function setCardDetails() {
  if (document.getElementById('solo').checked) {
    document.cookie="cardtype=Solo;path=/";
  }
  else if (document.getElementById('switch').checked) {
    document.cookie="cardtype=Switch;path=/";
  }
  else if (document.getElementById('mastercard').checked) {
    document.cookie="cardtype=Mastercard;path=/";
  }
  else if (document.getElementById('visa').checked) {
    document.cookie="cardtype=Visa;path=/";
  }
  document.cookie="cardnumber=" + document.getElementById('cardnumber').value + ";path=/";
  document.cookie="month=" + document.getElementById('month').value + ";path=/";
  document.cookie="year=" + document.getElementById('year').value + ";path=/";
}

function getCardDetails() {
  var cardDetails = {};
  cardDetails["cardtype"] = getCookieVariableValue('cardtype');
  cardDetails["cardnumber"] = getCookieVariableValue('cardnumber');
  cardDetails["month"] = getCookieVariableValue('month');
  cardDetails["year"] = getCookieVariableValue('year');

  return cardDetails;
}

function getCookieVariableValue(variable) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + variable + "=");
  if (parts.length == 2) return parts.pop().split(";").shift()
}
