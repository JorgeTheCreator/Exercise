const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  username:{
      type:String,
      required: true,
      unique:true,
      trim:true,
      minlength: 3 
  },
},{
    timestamps: true
});

// create the model "User" the name of my collection
const userModel = mongoose.model('User', userSchema);

module.exports = userModel