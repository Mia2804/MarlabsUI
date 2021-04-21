var app = angular
        .module('myApp',[])
        .controller('myController', function($q, $scope){
            function add(x,y){
                var q = $q.defer();
                setTimeout(function() {
                    // return x+y
                    // q.resolve(x+y)

                    // set reject
                    var result = x+y
                    if(result> 0){
                        q.resolve(x+y)
                
                    } else{
                        q.reject('Negative value: '+ result)
                    }
                },100)
                return q.promise
               
            }
            // var startTime = Date.now();

            // add(5,7,function(result) {
            //     $scope.result = result
            //     $scope.elapsedTime = Date.now() - startTime;
            // })

            // promise chaining
            var startTime = Date.now();
            add(5,2)
            .then(function(result){
                return add(result, -1)
            })
            .then(function(result){
                return add(result, -10)
            })
            .then(function(result){
                $scope.result = result
                $scope.elapsedTime = Date.now() - startTime;
            })
            .catch(function(failure){
                $scope.failure = failure
            })
            // debug when come to somt .then function that has eeror, never move to next state, bt always reach the finally
            .finally(
                function() {
                    $scope.elapsedTime = Date.now() - startTime;
                }
                
            )
        })