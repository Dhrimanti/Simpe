const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://dhritimancg:badmos@cluster0.qnkkxjb.mongodb.net/todo');






const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})

const todo=mongoose.model('Todo',todoSchema)

module.exports=todo;
