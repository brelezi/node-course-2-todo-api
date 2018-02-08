// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// generates a random object ID
// var obj = new ObjectID();
// console.log(obj);


// destructuration of the user object
// var user = {name:'andrew', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  } // the return has the function stop here and not run the rest of the code, the alternative would be to put an else statement to put the succes code
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops , undefined, 2)); //ops will store all the documents inserted
  // })


  // insert new doc into the Users collection, that will have the following properties (name, age, location)
  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 22,
    location: 'Philadelphia'
  },(err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined,2));
  });

  db.close();
});
