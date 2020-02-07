(function(){
    "use strict";

    angular.module('encryptednotetaking')
        .directive('newNote', NoteDirective);

        function NoteDirective(){
            return {
                templateUrl: 'static/encryptednotetaking/newnote.html',
                restrict: 'E',
                controller: ['$scope', '$http', function ($scope, $http) {
                    $scope.add = function(title, content){
                        let note = {
                            title: title,
                            encrypted_content: content
                        };
                        $http.post('/encryptednotetaking/notes/', note).then(
                            function(response){
                                let notes = $scope.data;
                                notes.push(response.data);
                            }
                        );
                        $scope.note_title = '';
                        $scope.note_content = '';
                    };
                }]
    
            };
        }
}());