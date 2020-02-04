(function(){
    "use strict";

    angular.module('encryptednotetaking', [])
        .controller('NotesController', ['$scope', '$http', NotesController]);
        function NotesController($scope, $http){
            $scope.data = [];
            $http.get('/encryptednotetaking/notes').then(function(response){
                $scope.data = response.data;
            });
        }
}());