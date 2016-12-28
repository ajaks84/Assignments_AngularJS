(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'found-items.html',
    scope: {
      onRemove: '&',
      items: '<',
      message: '<'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService','$timeout'];
function NarrowItDownController(MenuSearchService,$timeout) {
  var ctrl = this;
  ctrl.found=[];
  ctrl.getItems = function (searchTerm) {
      ctrl.found.length=0;
      ctrl.message=null;
      if (!searchTerm==""){
        ctrl.found=MenuSearchService.getMatchedMenuItems(searchTerm);
        $timeout(function(){
          if(ctrl.found.length==0){
          ctrl.message="Nothing found!";
          } 
        },1000);
      }
      else ctrl.message="Type something!"; 
  };
  ctrl.removeItem = function (itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var foundItems = [];
  
  service.getMatchedMenuItems = function (searchTerm) {

// process result and only keep items that match

    var response=$http({
                        method: "GET",
                        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                        }).then(function (result) {
                              var re = new RegExp(searchTerm, 'i');
                          for (var i = 0; i < result.data.menu_items.length; i++) {
           if (result.data.menu_items[i].description.match(re)&&searchTerm!=undefined){
            foundItems.push(result.data.menu_items[i]);
                                                      }
                                      }
                       });
// return items that match
      return foundItems;
            };
}

})();
