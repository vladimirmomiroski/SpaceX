const { mongoose } = require('mongoose');
const express = require('express');

const app = express()

require('dotenv').config({ path:__dirname + '/./../.env' });

app.use('/', require('./routes/routes'));
app.use('/comments', require('./routes/routes'));

mongoose
  .connect("mongodb+srv://vladimir:R8QqnGKLQrEW1F8v@cluster0.8wijq.mongodb.net/xSpace?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => 
  {
  	throw new Error(error);
  });

app.listen(5000);