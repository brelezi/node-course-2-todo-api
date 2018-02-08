const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  } // the return has the function stop here and not run the rest of the code, the alternative would be to put an else statement to put the succes code
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a7c63c46b59fb26a5714e30")
  // }, {
  //   $set: {
  //     completed:true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a7c4f2e38a6c202456dfda6")
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });


  // db.close();
});
