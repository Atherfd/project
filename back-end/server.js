const e=require("express")
const app=e()
const db=require("./db")
const todo=require("./todo")
app.use(e.json())
app.get("/all",(req,res)=>{

``
    todo.find({},(err, todos)=>{
        if(err){
            console.log(err)
        }
        res.json(todos)
        

    })
})
app.post("/newtodo",(req,res)=>{
    todo.create({title:req.body.title, iscpmpleted:req.body.iscpmpleted}, (err, newtodo)=>{
    
        if(err){
            return handleError(err);
    
        }
        res.json(" Sucess add "+ newtodo)
    
    })
    })


app.listen(5000,()=>{

    console.log("Server 5000")
})