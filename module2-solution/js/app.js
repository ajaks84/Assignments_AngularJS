(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getItemsToBuy();

  list.moveToBoughtItems = function (item,itemIndex) {
    ShoppingListCheckOffService.moveToBoughtItems(item,itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donut",
    quantity: "200"
  },
  {
    name: "Cookie",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Coconut",
    quantity: "4"
  },
  {
    name: "Olive oil",
    quantity: "1"
  },
  {
    name: "Jogurt",
    quantity: "10"
  },
  {
    name: "Cucumber",
    quantity: "8"
  },
  {
    name: "Cacao",
    quantity: "2"
  },
  {
    name: "Creams",
    quantity: "40"
  }
  ];

  // List of bought items
  var bought = [];

  service.getItemsToBuy = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };

  service.moveToBoughtItems = function (item,itemIndex) {
    bought.push(item);
    console.log(bought);
    toBuy.splice(itemIndex, 1);
  };

}

})();
