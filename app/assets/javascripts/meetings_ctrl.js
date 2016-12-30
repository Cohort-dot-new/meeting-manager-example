/* global angular */
(function() {
  angular.module("app").controller("meetingsCtrl", function($scope) {
    $scope.setup = function() {
      $scope.message = "Hello from angular!";
    };
  });
})();
