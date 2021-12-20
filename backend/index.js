const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const router = require('./routes/router')
require('./db/conn')

const app = express()
const port = 5000 || process.env.port

// middleware 
app.use(express.json())
app.use(cors())
app.use("/api/v1/events",router)

app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.listen(port,()=>console.log(`Server is listening to the port ${port}`));
