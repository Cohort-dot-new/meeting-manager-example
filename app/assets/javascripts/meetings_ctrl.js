/* global angular */
(function() {
  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get('/api/v1/meetings').then(function(response) {
        $scope.meetings = response.data;
        console.log($scope.meetings);
      });
    };
  });
})();
