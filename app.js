// 01

(function() {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('myfirstController', ['$scope', function($scope) {
            $scope.name = "Vishal";
            $scope.sayHello = function() {
                return "Hello coursera";
            };
        }]);
})();