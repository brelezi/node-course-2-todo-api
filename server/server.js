var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

//  middleware
app.use(bodyParser.json()); //you can now send JSON to you POST app

app.post('/todos', (req,res)=>{
  var todo = new Todo({
    text: req.body.text // we create a new todo, setting up the text prorperty as the text property coming from the body of the response fire up by the http POST request
  });

  todo.save().then((doc)=>{
    res.send(doc); //you save the doc and if the promise works then you send back to the client the doc
  }, (e)=>{
    res.status(400).send(e);
  })
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});
