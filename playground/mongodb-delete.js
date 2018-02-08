const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  } // the return has the function stop here and not run the rest of the code, the alternative would be to put an else statement to put the succes code
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // })

  // delteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a7c5042e57ae902488ccfe9")
  }).then((result)=>{
    console.log(result);
  });

  // db.close();
});
