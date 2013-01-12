'use strict';

function MenuController($scope, $http, $location) {
    $scope.list = [
                {name:'Home', url:'#/home'},
                {name:'Wiki', url:'#/wiki'},
                {name:'Page 2', url:'#/page2'},
                ];

    $scope.path = function() {
            return '#' + $location.path();
        }
}

function HomeController($scope, $http, $location) {

}

function WikiController($scope, $http, $location) {
    $scope.loading = false;
    $scope.languages = [
    {id:'ru', name:'Русский'},
    {id:'en', name:'English'},
    ];
    $scope.lang = 'ru';

    $scope.load = function() {
        $scope.loading = true;
        $http({method: 'GET', url: '/api/wiki',
            params:  {'name':$scope.name,
                      'lang':$scope.lang}
        }).
          success(function(data, status) {
            $scope.data = data;
            $scope.loading = false;
          }).
          error(function(data, status) {
          $scope.loading = false;
        });
    }
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
