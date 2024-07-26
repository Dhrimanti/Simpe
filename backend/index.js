const express= require('express')


const app=express();

app.use(express.json())

app.post('/', function(req, res){
    res.send('Hello World')
})


app.get('/', function(req, res){
    res.send('Hello World')
})


app.post('/completed',function(req, res){
    res.send('Task Completed')})

app.listen(3000, function(req, res, next) {
    console.log("Server is running on port 3000");})