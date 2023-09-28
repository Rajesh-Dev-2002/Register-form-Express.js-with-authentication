const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6")
.then(()=>{
 console.log(`connection successful`)
})
.catch((e)=>{
    console.log(`connection lost`)
})