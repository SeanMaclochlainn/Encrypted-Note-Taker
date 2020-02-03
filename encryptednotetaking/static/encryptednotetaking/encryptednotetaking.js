(function(){
    "use strict";

    angular.module('encryptednotetaking', [])
        .controller('NotesController', ['$scope', NotesController]);
        /*function NotesController($scope){
            $scope.note = {
                title:"test1"
            }
        }*/
        function NotesController($scope){
            $scope.data =
            {
                notes:[
                    {
                        title: "note1",
                        content: "content"
                    },
                    {
                        title: "note2",
                        content: "content2"
                    }
                ]
            }
        }
        // function NotesController($scope){
        //     $scope.data = [
        //         {
        //             name:"test33",
        //             notes:[
        //                 {
        //                     title: "note1",
        //                     content: "content"
        //                 },
        //                 {
        //                     title: "note2",
        //                     content: "content2"
        //                 }
        //             ]
        //         }
        //     ]
        // }
}());