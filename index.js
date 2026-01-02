const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

let user={
    name:'John Doe',
    age:30,
    email:'john@gmail.com',
    gender:'male'
}

app.get('/user',(req,res)=>{
    res.json(user);
});

app.listen(3000)