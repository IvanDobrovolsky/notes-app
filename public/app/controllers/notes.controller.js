(function () {
    "use strict";

    angular
        .module('notes')
        .controller('NotesController', ['apiService', 'colorService', NotesController]);



    function NotesController(apiService, colorService){

        var notes = this;

        notes.editor = {
            placeholder: "Enter new task here...",
            text: ""
        };

        notes.items = [
            {
                id: new Date(),
                text: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
                color: "red"
            },
            {
                id: new Date(),
                text: "AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple Angular app.",
                color: "yellow"
            },
            {
                id: new Date(),
                text: "Directives is a unique and powerful feature available only in Angular. Directives let you invent new HTML syntax, specific to your application.",
                color: "blue"
            },
            {
                id: new Date(),
                text: "AngularJS was designed from ground up to be testable. It encourages behavior-view separation, comes pre-bundled with mocks, and takes full advantage of dependency injection. It also comes with end-to-end scenario runner which eliminates test flakiness by understanding the inner workings of AngularJS.",
                color: "orange"
            },
            {
                id: new Date(),
                text: "The dependency injection in AngularJS allows you to declaratively describe how your application is wired.",
                color: "pink"
            },
            {
                id: new Date(),
                text: "AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple Angular app. AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple Angular app.",
                color: "plum"
            }
        ];

        notes.delete = function(index){
            notes.items.splice(index, 1);
        };

        notes.add = function(){
            var newNote = {
                id: new Date(),
                text: notes.editor.text,
                color: colorService.getRandom()
            };

            if(notes.editor.text){
                notes.items.unshift(newNote);
                notes.editor.text = '';
            }

        }
    }
}());