const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
// import dotenv from "dotenv";

// dotenv.config();
require('./db');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

app.use((req, res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if(req.method === 'Options'){
      res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE, POST')
      return res.status(200).json({})
    }
    next()
  })

app.get("/",(req,res)=>{
    res.send({message:"Hi, this is seasonal-employment api provider."})
  })

app.use(require("./routes/booksRoute"));
app.use(require("./routes/userRoute"));


// Mount the router on the app

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
