"use strict";
const express = require('express'),
    config = require('./app/app.config'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

console.log(config);


let notes = [
    {
        id: new Date() + Math.random(),
        text: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
        color: "red"
    },
    {
        id: new Date() + Math.random(),
        text: "AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple Angular app.",
        color: "yellow"
    },
    {
        id: new Date() + Math.random(),
        text: "Directives is a unique and powerful feature available only in Angular. Directives let you invent new HTML syntax, specific to your application.",
        color: "blue"
    },
    {
        id: new Date() + Math.random(),
        text: "AngularJS was designed from ground up to be testable. It encourages behavior-view separation, comes pre-bundled with mocks, and takes full advantage of dependency injection. It also comes with end-to-end scenario runner which eliminates test flakiness by understanding the inner workings of AngularJS.",
        color: "orange"
    },
    {
        id: new Date() + Math.random(),
        text: "The dependency injection in AngularJS allows you to declaratively describe how your application is wired.",
        color: "pink"
    },
    {
        id: new Date() + Math.random(),
        text: "AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple Angular app. AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple Angular app.",
        color: "plum"
    }
];


app.get('/notes', (request, response) => {
   response.json({notes: notes});
});

app.post('/notes', (request, response) => {
    var note = request.body;
    notes.unshift(note);
    response.json({success: true, message: "New note was successfully added."});
});

app.delete('/notes/:id', (request, response) => {
    var id = request.params.id;
    notes.splice(notes.indexOf(notes.find((note) => note.id = id)), 1);
    response.json({success: true, message: "Successfully deleted!"});
    console.log(notes.length);
});

app.listen(config.port, () => {
   console.log(`Magic happens on port ${config.port}`);
});