const express= require('express');
const todo = require('./db');


const app=express();

app.use(express.json())

app.post('/', async function(req, res){
    const createPayLoad=req.body;
    const parsedPayload=createTodo.safeParse(createPayLoad);
    if(!parsedPayload.success){
        return res.status(400).json({msg: "Invalid payload"})
    }
    await todo.create({
        title: parsedPayload.title,
        description:createdPayload.description,
        
        
    })
    res.json("Todo created")
})


app.get('/', async function(req, res){
    const todos=todo.find({});
    res.json(todos);

    
})


app.put('/completed',function(req, res){
    const updateTodo=req.body;
 })

app.listen(3000, function(req, res, next) {
    console.log("Server is running on port 3000");})