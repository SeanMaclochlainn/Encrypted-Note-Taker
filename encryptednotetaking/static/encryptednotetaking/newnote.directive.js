(function(){
    "use strict";

    angular.module('encryptednotetaking')
        .directive('newNote', NoteDirective);

        function NoteDirective(){
            return {
                templateUrl: 'static/encryptednotetaking/newnote.html',
                restrict: 'E',
                controller: ['$scope', '$http', function ($scope, $http) {
                    $scope.add = function(){
                        $http.post('/encryptednotetaking/notes/', $scope.note).then(
                            function(){
                                let notes = $scope.data;
                                notes.push($scope.note);
                                $scope.isNewNoteActive = false;
                            }
                        );
                    };
                }]
    
            };
        }
}());