(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','ChoiceService','$scope'];
function SignUpController(MenuService,ChoiceService,$scope) {
  var reg = this;
  reg.submitPossible = false;

  reg.checkFavDish = function (favDish) {
    if (favDish!=undefined){
    call = favDish.toUpperCase();
     reg.user.favDish = call;
      MenuService.getMenuItem(call).then(function (response) {
        reg.user.dish = response;
        if(reg.user.dish!=false){
          reg.complete = true;
        }else{
          reg.complete = false;
          $scope.regForm2.$invalid = true;
      }
    });}
  };

  reg.submit = function () {
       ChoiceService.saveChoice(reg.user);
       reg.submitPossible = true;
  };

}

})();
