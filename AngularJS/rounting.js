// this time we finllay have dependency
var app = angular.module('app',['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template: '<b><h2> This is the first message</h2></b>'
        
        // this is to use a link 
        templateUrl:'msg1.html',
        controller:'message1'
    })
    .when('/second-msg', {
        // template: '<b><h2> This is the second message</h2></b>'
        templateUrl:'msg2.html',
        controller:'message2'
    })
    .when('/third-msg', {
        // redirectTo = "/second-msg"
        redirectTo: function(){
            alert("Sorry! the implementation is not yet done");
            return '/first-msg'
        }
    })
    .when('/', {
        template:'<b><h2>Default message</h2></b>'
    })
    .otherwise({
        template:'<b>Click on the links on the left</b>'
    })

}]);

app.controller('message1', ['$scope', function($scope){
    $scope.a = 10
    $scope.b =20
}])
app.controller('message2', ['$scope', function($scope){
    $scope.c = 30
    $scope.d =40
}])