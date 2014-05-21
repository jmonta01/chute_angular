'use strict';

angular
  .module('chuteAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'chute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/my-other-view', {
        templateUrl: 'views/my-other-view.html',
        controller: 'MyOtherViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
