const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/dataBase');
const cors = require('cors');


dotenv.config();
db();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT

app.listen(PORT , ()=>{
  console.log("server started")
})

