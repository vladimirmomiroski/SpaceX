const { mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

require('dotenv').config()

const DB_URL = process.env.DB_URL


app.use('/', require('./routes/routes'));
app.use('/comments', require('./routes/routes'));

mongoose
  .connect(DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => 
  {
  	throw new Error(error);
  });

app.listen(5000);