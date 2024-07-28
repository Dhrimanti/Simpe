const express= require('express');
const todo = require('./db');
const { createTodo, updateTodo }=require("./types")

const cors=require("cors");
const app=express();

app.use(express.json())
app.use(cors())

app.post('/', async function(req, res){
    const createPayLoad=req.body;
    const parsedPayload=createTodo.safeParse(createPayLoad);
    if(!parsedPayload.success){
        return res.status(400).json({msg: "Invalid payload"})
    }
    console.log(parsedPayload)
    await todo.create({
        title: createPayLoad.title,
        description:createPayLoad.description,
        completed:false
        
        
    })
    res.json("Todo created")
})


app.get('/', async function(req, res){
    const todos=await todo.find({});
    
    res.send(todos)
    
    

    
})

app.get("/badmos",function(req, res){
    res.send("Mai badmos chora ")
})


app.put('/completed',async function(req, res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    console.log(updatePayload.title)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send wrong inputs"
        });return 
    }
    
    await todo.updateOne({
        title:req.body.title
        
    },{
        completed:true
    })
    res.json("Todo updated")
 })

 app.get('/completed',async function(req, res){
    const todos=await todo.find({});
    console.log(todos);
    res.json(todos);
 })

app.listen(3000, function(req, res, next) {
    console.log("Server is running on port 3000");})