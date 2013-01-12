'use strict';


// Declare app level module which depends on filters, and services
angular.module('ag', ['ag.filters', 'ag.services', 'ag.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.when('/wiki', {templateUrl: 'partials/wiki.html', controller: WikiController});
    $routeProvider.when('/page2', {templateUrl: 'partials/page2.html', controller: Page2Controller});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
