'use strict';

angular
  .module('chuteAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('chuteAngularApp', ['chute']);

angular.module('chuteAngularApp').controller('MainCtrl', ['$scope', 'Chute.API.Asset', function($scope, Asset) {
  $scope.assets = Asset.query({album: 'abcqsrlx', perPage: 3});
}]);
