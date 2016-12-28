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
      items: '<'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService','$timeout'];
function NarrowItDownController(MenuSearchService,$timeout) {
  var ctrl = this;
  ctrl.found=[];
   ctrl.message=null;
    ctrl.getItems = function (searchTerm) {
        if (!searchTerm==""){
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
          promise.then(function(response){
            ctrl.found = response;
          console.log(ctrl.found);
            if (ctrl.found.length == 0) {
                ctrl.message = "Nothing found"
            }
            else {
                ctrl.message = ""
            }
        });
          }
           else ctrl.message="Type something!"; 

      };


  ctrl.removeItem = function (itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
   service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
          return $http({method: "GET",
                        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                        })
// process result and only keep items that match
          .then(function (result) {
                              var re = new RegExp(searchTerm, 'i');
                          for (var i = 0; i < result.data.menu_items.length; i++) {
           if (result.data.menu_items[i].description.match(re)&&searchTerm!=undefined){
            foundItems.push(result.data.menu_items[i]);
                                                      }
                                      }
                  // return items that match
                    return foundItems;     
    });
            }
}

})();
