// MVC in AngularJs ---Moudule: angular.modul("name", )
// $ scope: can reache from view and controller
var myApp = angular.module("myModule", []);

// MVC in AngularJs ---Controller: define dollar scope to attch to modul
var myController = function($scope){
    $scope.message = "Hellow world"
}

// ("controller collection", one of controllers)
myApp.controller("myController", myController)

// OR: creating the controller and reacheing and define at same time
myApp.controller("myController1", function($scope){
    $scope.message = "new Controller!"
})
myApp.controller("myController2", function($scope){
    var employee = {
        firstName:"John Wick",
        lastName:"Smith",
        department:"Sales",
        flag:"usa.jpg"
    }
    $scope.employee = employee
})