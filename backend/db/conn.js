const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://suhas:suhas@cluster0.cj8de.mongodb.net/Event?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database is connected...")
})
.catch((e)=>{
    console.log('Database is not connted...')
})