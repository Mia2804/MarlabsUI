var myApp = angular.module("myModule", [])

myApp.controller("twoWayBinding", function($scope){
    $scope.message = "Two way binding!"
})