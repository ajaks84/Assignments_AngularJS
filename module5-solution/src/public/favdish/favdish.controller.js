(function () {

angular.module('public')
.controller('FavDishController', FavDishController);

FavDishController.$inject = ['menuItem', 'ApiPath','MenuService'];
function FavDishController(menuItem,ApiPath,MenuService) {
  var $ctrl = this;
  $ctrl.menuItem = menuItem;
  $ctrl.basePath = ApiPath;
  };



})();
