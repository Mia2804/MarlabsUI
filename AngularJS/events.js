var app = angular
            .module('myModule' , [])
            .controller('myController', function($scope) {
                var tech = [
                    { name:"C#", likes:0, dislikes:0},
                    { name:"Angular", likes:0, dislikes:0},
                    { name:"React", likes:0, dislikes:0},
                    { name:"Vue", likes:0, dislikes:0},
                    { name:"GrapgQl", likes:0, dislikes:0},
                    { name:"Webpack", likes:0, dislikes:0}
                ];

                $scope.tech = tech;

                // event handlers:
                $scope.incrementLikes = function(tech){
                    tech.likes++
                }
                
                $scope.decrementLikes = function(tech){
                    tech.dislikes++
                }
            })