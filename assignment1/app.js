(function () {
angular.module('lunchCheckApp',[])
.controller('lunchCheckController',LCController)
LCController.$inject = ['$scope'];
function LCController($scope) {
  $scope.lunchItems='';
  $scope.message="";
  $scope.checkLunchItems=function (lunchItems) {
    var trimlunchItems =lunchItems.trim();
    var array = trimlunchItems.split(',');
    for (var i = 0; i < array.length; i++) {
      if (array[i]=="") {
          array.splice(i);
      }
    }

    if ((array.length <= 3) && (array.length > 0)) {
        $scope.message="Enjoy!";
    }else if (array.length > 3) {
         $scope.message="Too much!";
    }else {
       $scope.message="Please enter data first";
    }
    return $scope.message;
  }
}
})();
