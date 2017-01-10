(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

// 'item' is injected through state's resolve
MenuItemsController.$inject = ['menu_items', 'catName']
function MenuItemsController(menu_items,catName) {
  var miCtrl = this;
  miCtrl.menu_items = menu_items;
  miCtrl.catName = catName;

}

})();
