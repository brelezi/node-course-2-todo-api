const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  } // the return has the function stop here and not run the rest of the code, the alternative would be to put an else statement to put the succes code
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   __id: new ObjectID("5a7c541e6b59fb26a57148b2")
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })



  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err)=> {
    console.log('Unable to fetch users', err);
  })

  // db.close();
});
