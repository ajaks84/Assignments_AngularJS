
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
                if (str.length <= 3) {
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
