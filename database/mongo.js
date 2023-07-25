import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017",{
    useNewUrlParser:true,
    dbName:'africab_db'
})

mongoose.connection.on('open',()=>console.log("Database connected..."))


