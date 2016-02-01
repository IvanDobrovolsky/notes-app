//ES features work in strict mode
"use strict";

//Requiring needed modules
const express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    bodyParser = require('body-parser');

//Initialization of express application and db
const app = express();
let db;

//Using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Setting public directory for front end
app.use(express.static(__dirname + '/public'));


//Connecting to MongoDB client
MongoClient.connect("mongodb://localhost:27017/notes-app", (err, database) => {

    if(err) throw err;

    db = database;

    // Start the application after the database connection is ready
    app.listen(8080, () => {
        console.log("Magic happens on port 8080: ");
    });

});


//RESTful api with Express
//Handling get request
app.get('/notes', (request, response) => {

   // Retrieving data from the database and sending it to the client
   db.collection('notes').find({}).toArray((err, docs) => {
       if (err) response.json({success: false, message: "Cannot retrieve data from db!"});
       response.json({success: true, notes: docs});
   })
});

app.post('/notes', (request, response) => {

    var note = request.body;

    //Inserting the note do the database
    db.collection('notes').insert(note, (err, result) => {
        if (err) response.json({success: false, message: "Cannot add to db!"});
        console.log("Inserted! " + JSON.stringify(result));
        response.json({success: true, message: "New note was successfully added!"});
    });
});

app.delete('/notes/:id', (request, response) => {

    var id = request.params.id;

    //Removing the note that matches id from the database
    db.collection('notes').removeOne({_id: id}, (err, result) => {
        if (err) response.json({success: false, message: "Cannot delete from db!"});
        console.log("Removed! " + JSON.stringify(result));
        response.json({success: true, message: "Successfully deleted!"});
    });
});

