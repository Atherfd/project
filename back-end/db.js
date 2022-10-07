const mongose=require("mongoose")
const mongooseURL="mongodb://127.0.0.1:27017/bd2"
const db=mongose.connection

mongose.connect(mongooseURL, {useNewUrlParser:true}, ()=>{

    console.log("DB is working")
})
db.on("error", (err)=>{

    console.log(err.message)
})
db.on("connected", ()=>{

    console.log("BD is Ruinning")
})