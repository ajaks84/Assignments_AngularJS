(function () {
"use strict";

angular.module('common')
.service('ChoiceService', ChoiceService);


ChoiceService.$inject = [];
function ChoiceService() {
  var service = this;

  service.saveChoice = function (choice) {
    service.choice = choice;
  };

  service.getChoice = function () {
    return service.choice;
  };

}

})();
