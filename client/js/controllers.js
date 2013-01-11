'use strict';

function MenuController($scope, $http, $location) {
    $scope.list = [
                {name:'Home', url:'#/home'},
                {name:'Page 2', url:'#/page2'},
                ];

    $scope.path = function() {
            return '#' + $location.path();
        }
}

function HomeController($scope, $http, $location) {

}

function Page2Controller($scope, $http, $location) {
    $scope.refresh = function() {
        $http({method: 'GET', url: '/api/info'}).
          success(function(data, status) {
            $scope.some_data = data;
          }).
          error(function(data, status) {
        });
    }

    $scope.refresh();
}
