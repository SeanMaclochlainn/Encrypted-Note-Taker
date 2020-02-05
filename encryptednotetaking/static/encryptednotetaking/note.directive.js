(function(){
    "use strict";

    angular.module('encryptednotetaking')
        .directive('encryptedNote', NoteDirective);

        function NoteDirective(){
            return {
                templateUrl: 'static/encryptednotetaking/note.html',
                restrict: 'E'
            };
        }
}());