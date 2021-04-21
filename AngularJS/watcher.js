var app = angular.module('app',[]);

// app.controller('emp', function($scope) {
//     $scope.a = 1
//     $scope.b = 2
//     $scope.c = 3

    // $scope.updateC = function() {
    //     $scope.c = $scope.a * 4
    // }


    //manullay watcher for c
    // $scope.$watch("c", function(newVal, oldVal){
    // if(newVal != oldVal) {
    //     console.log("Update C to "+ newVal)
    // }
    // })
    // $scope.$watch("a", function(newVal, oldVal){
    //     if(newVal != oldVal) {
    //         $scope.c = $scope.b * 2
    //         console.log("Update C to "+ newVal)
    //     }
    //     })



    //Watch group 
    // $scope.$watchGroup(["a", "b"] , function(newVal, oldVal){
    //     if (newVal != oldVal) {
    //         $scope.c = $scope.a * $scope.b
    //     }
    // })

    //reference watcher
    // app.controller('emp', function($scope) {
    //     $scope.o = {
    //         a : 1,
    //         b : 2,
    //         c : 3
    //     }
    // // need to add a ture here
    // $scope.$watch ("o", function(newVal, oldVal) {
    //     if(newVal != oldVal) {
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // },true)

    //collection watcher
    app.controller('emp', function($scope){

        $scope.emps = [
            {empno:"1001", ename: "Jon"},
            {empno:"1002", ename: "Jim"},
            {empno:"1003", ename: "Ann"},
            {empno:"1004", ename: "May"},
        ]
        // each time add btn will add 2 new diff in watcher
        $scope.addEmp = function(){
            var newEmpno = 100 + $scope.emps.length + 1;
            var newName = "ename" + newEmpno;

            $scope.emps.push({empno: newName, ename: newName})
        }

        // will not increase watcher
        $scope.modify3rd = function(){
            $scope.emps[2].ename= "Test"
        }

        // $scope.$watch('emps', function (newVal, oldVal){
        //     console.log('No. of Employees' + $scope.emps.length)
        // })

        // // Instead use watch collection!
        // $scope.$watchCollection('emps', function (newVal, oldVal){
        //     console.log('No. of Employees' + $scope.emps.length)
        // })

        // Also we could use watch reference
        $scope.$watch('emps', function (newVal, oldVal){
            console.log('No. of Employees' + $scope.emps.length)
        },true)
    

})