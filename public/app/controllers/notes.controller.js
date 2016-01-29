(function () {
    "use strict";

    angular
        .module('notes')
        .controller('NotesController', ['apiService', 'colorService', NotesController]);



    function NotesController(apiService, colorService){

        var notes = this;


        notes.items = [];

        //Getting notes from backend and appending to the model
        apiService
            .get()
            .then(function(response){
                notes.items = response.data.notes;
                console.log(notes.items);
            })
            .catch(function(error){
                console.log(error);
            });

        notes.editor = {
            placeholder: "Enter new note here...",
            text: ""
        };


        notes.delete = function(note){
            notes.items.splice(notes.items.indexOf(note), 1);
            apiService.delete(note.id)
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });

        };

        notes.add = function(){
            var newNote = {
                id: new Date(),
                text: notes.editor.text,
                color: colorService.getRandom()
            };

            if(notes.editor.text){
                notes.items.unshift(newNote);
                apiService.post(newNote)
                    .then(function(response){
                        console.log(response);
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                notes.editor.text = "";
            }

        };
    }
}());