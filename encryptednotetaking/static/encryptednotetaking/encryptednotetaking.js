(function(){
    "use strict";

    angular.module('encryptednotetaking', [])
        .controller('NotesController', ['$scope', '$http', NotesController]);

        function NotesController($scope, $http){
            $scope.add = function(title, content){
                let note = {
                    title: title,
                    encrypted_content: content
                };
                $http.post('/encryptednotetaking/notes/', note);
            };
            $scope.data = [];
            $http.get('/encryptednotetaking/notes/').then(
                function(response){
                    $scope.data = response.data;
                  }
            );
        }
}());