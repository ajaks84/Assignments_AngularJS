(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.inputString = "";
  $scope.outputString = "";
  $scope.checkInput = function(inputString){
  	var toOutput = processInput($scope.inputString);	
};

function processInput(string) {

	var str = string.split(',');

	if(str.length==1){
		$scope.outputString =  "Please enter data first"
	}
	else if (str.length<=3){
		$scope.outputString =  "Enjoy!"
	}
	else {
		$scope.outputString ="To Much! Stop it man!"
	}
  }
});

})();

