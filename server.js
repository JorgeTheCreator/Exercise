const express = require('express');
const  cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//---middle ware
app.use(cors());
// allows to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true 
})
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('MongoDB database extablish connection!')
})
const exerciseRouter = require('./routes/exercises');
const userRouter =  require('./routes/users')

//routes
app.use('/exercises',exerciseRouter)
app.use('/users',userRouter)

app.listen(port, ()=>{
    console.log(`TESTING DATA ${port}`)
})
