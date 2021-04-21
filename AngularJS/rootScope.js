var sample = angular.module('sample', []).run(['$rootScope', function($rootScope){
    $rootScope.TexPercent = 50
}]);

sample.controller("emp", ["$scope", function($scope){
    $scope.Name = "John"
}])

sample.controller("empDetails", ["$scope", function($scope){
    $scope.Sal = 9999;
    $scope.Dept = "Sales"
}])

sample.controller("empPayCheck", ["$scope", "$rootScope",  function($scope,  $rootScope){
    $scope.getTexes = function(){
        return $scope.Sal * $rootScope.TexPercent/100;
    }
    $scope.getNet = function() {
        return $scope.Sal - $scope.getTexes()
    }
}])