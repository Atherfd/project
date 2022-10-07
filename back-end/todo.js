const mongose=require("mongoose")
const TodoSchema= new mongose.Schema({title:{type:String, requierd:true}, iscpmpleted:{type:Boolean, required:true}}
     )
    const Todo= mongose.model("Todo", TodoSchema)
    module.exports=Todo