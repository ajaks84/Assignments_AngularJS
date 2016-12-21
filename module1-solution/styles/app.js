
(function() {
    'use strict'
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', controllerFn);
    controllerFn.$inject = ['$scope'];
    function controllerFn($scope) {
        $scope.outputString = '';
        $scope.checkInput = function() {
            if ($scope.inputString) {
                var str = $scope.inputString.split(',').filter(Boolean);
                console.log(str);
				var emptyEntry=0;
				console.log("Length is: "+str.length); 
                for (var i=0; i<str.length; i++){
				    var pat = new RegExp("\b[ds]", "g");
				    if (str[i].match(pat)){
				    	emptyEntry++;
				    }
				    
				}
                console.log("Empty entry: "+emptyEntry);
				var result = str.length-emptyEntry;

				console.log(result);

                if (result <= 3) {
                    $scope.outputString = 'Enjoy!';
                } else {
                    $scope.outputString = 'Too much!';
                }
            } else {
                $scope.outputString = 'Please enter data first';
            }
        };
    };
})();
