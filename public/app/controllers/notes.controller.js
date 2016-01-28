(function () {
    "use strict";

    angular
        .module('notes')
        .controller('NotesController', ['apiService', 'colorService', NotesController]);



    function NotesController(apiService, colorService){

        var notes = this;

        notes.message = 'NotesController works';

        console.log(apiService, colorService);
    }
}());