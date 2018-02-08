const mongoose = require('mongoose');

// create a new user model
// email property needs to be set up ; require it and trim it, type has to be set to a string and a minlength of 1

var User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    trim: true,
    minlength:1
  }
})

// var user = new User({
//   email: '   andrew@example.com  '
// });
//
//
// user.save().then((doc)=>{
//   console.log('User saved',doc );
// },(e)=>{
//   console.log('unable to save user',e);
// })


module.exports = {User};
