(function () {
    "use strict";

    angular
        .module('notes')
        .controller('NotesController', ['apiService', 'colorService', NotesController]);


    function NotesController(apiService, colorService){

        var notes = this;

        //Notes editor model
        notes.editor = {
            placeholder: "Enter new note here...",
            text: ""
        };

        //Notes items model
        notes.items = [];

        //Getting notes from backend and appending to the model
        apiService
            .get()
            .then(function(response){
                notes.items = response.data.notes;
            })
            .catch(function(error){
                console.log(error);
            });


        notes.delete = function(note){

            //Deleting the note from angular model
            notes.items.splice(notes.items.indexOf(note), 1);

            //Deleting the note from backend
            apiService
                .delete(note._id)
                .then(function(response){
                    console.log(response.data.message);
                })
                .catch(function(error){
                    console.log(error);
                });

        };

        notes.add = function(){

            var newNote = {
                _id: new Date(),
                text: notes.editor.text,
                color: colorService.getRandom()
            };

            if(notes.editor.text){

                //Appending the note to angular model
                notes.items.unshift(newNote);

                //Posting the note to backend
                apiService
                    .post(newNote)
                    .then(function(response){
                        console.log(response.data.message);
                    })
                    .catch(function(error){
                        console.log(error);
                    });

                //Clear notes editor after adding a note
                notes.editor.text = "";
            }

        };
    }
}());