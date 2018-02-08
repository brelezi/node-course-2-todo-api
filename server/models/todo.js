const mongoose = require('mongoose')


// create a mongoose model so that mongoose knows how to store data

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, //validator
    minlength: 1, //validator
    trim: true //validator
  },
  completed: {
    type: Boolean,
    default: false //default
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// created a new todo

// var  newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// // saved it to the database
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e)=> {
//   console.log('Unable to save todo');
// });

// challenge

// var otherTodo = new Todo({
//   'text':'Get it done',
//   completed: false,
//   completedAt: 112222
// });
//
//
// otherTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e)=>{
//   console.log('Unable to save todo', e);
// })


module.exports = {Todo};
