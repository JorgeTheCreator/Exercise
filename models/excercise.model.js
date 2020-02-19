const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var excerciseSchema = new Schema({
  username:{ type:String, required: true},
  description:{ type:String, required: true},
  duration:{ type:Number, required: true},
  date:{ type: Date, required: false}
},{
    timestamps: true
});

// create the model
const excerciseModel = mongoose.model('Excercise', excerciseSchema);

module.exports = excerciseModel