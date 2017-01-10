(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  var categories = []; 

  var menu_items = [];

  service.getAllCategories = function () {
          return $http({method: "GET",
                        url: ("https://davids-restaurant.herokuapp.com/categories.json")
                        })
                          .then(function (result) {
                          categories=result.data;
                          return categories;     
    });
  };

  service.getItemsForCategory= function (categoryShortName) {
          var requestUrl = 
          "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName;
          return $http({method: "GET",
                           url: (requestUrl)
                        })
                          .then(function(result){
                          menu_items=result.data.menu_items;
                          return menu_items;
                        })
  };

   }

})();
