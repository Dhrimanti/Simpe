const zod =require('zod');
const User=zod.object({
    title:zod.string(),
    description:zod.string(),
    

},
{
    id:zod.string(),
})


const createTodo=zod.object({title:zod.string(), description:zod.string()});
const updateTodo=zod.object({title:zod.string()})

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo,
}