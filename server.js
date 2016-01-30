"use strict";
const express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let db;
app.use(express.static(__dirname + '/public'));


//DB stuff
// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/notes-app", function(err, database) {

    if(err) throw err;

    db = database;

    // Start the application after the database connection is ready
    app.listen(8080, () => {
        console.log("Magic happens on port 8080: ");
    });
});


app.get('/notes', (request, response) => {
   db.collection('notes').find({}).toArray((err, docs) => {
       if (err) throw err;
       response.json({notes: docs});
   })
});

app.post('/notes', (request, response) => {
    var note = request.body;
    //Inserting needed tasks
    db.collection('notes').insert(note, (err, result) => {
        if (err) response.json({success: false, message: "Cannot add to db!"});
        console.log("Inserted! " + JSON.stringify(result));
        response.json({success: true, message: "New note was successfully added."});
    });
});

app.delete('/notes/:id', (request, response) => {

    var id = request.params.id;

    db.collection('notes').removeOne({_id: id}, (err, result) => {
        if (err) response.json({success: false, message: "Cannot delete from db!"});
        console.log("Removed! " + JSON.stringify(result));
        response.json({success: true, message: "Successfully deleted!"});
    });
});

