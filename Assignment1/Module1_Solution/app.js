(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.lunchitems
  $scope.message = null;
  $scope.countItems= function () {
var splitItems = $scope.lunchitems.split(",").length;
if (splitItems<=3){
        $scope.message= "Enjoy!"}

else {$scope.message="Too Much!"}
}

});

})();
