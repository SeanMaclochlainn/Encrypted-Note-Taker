(function(){
    "use strict";

    angular.module('encryptednotetaking')
        .directive('editNote', NoteDirective);

        function NoteDirective(){
            return {
                templateUrl: 'static/encryptednotetaking/editnote.html',
                restrict: 'E',
                controller: ['$scope', '$http', function ($scope, $http) {
                    var url = '/encryptednotetaking/notes/' + $scope.note.id + '/';
                    $scope.update = function () {
                        $http.put(
                            url,
                            $scope.note
                        );
                    };

                    $scope.delete = function(){
                        $http.delete(url).then(
                            function(){
                                var notes = $scope.data;
                                notes.splice(
                                    notes.indexOf($scope.note),
                                    1
                                );
                            }
                        );
                    };

                    $scope.modelOptions = {
                        debounce: 500
                    };
                }]
    
            };
        }
}());