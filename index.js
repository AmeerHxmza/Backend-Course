const express=require('express');

const app=express();

app.use(express.json());

// Simple Practice of Express.js

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

// Body Input Text 

app.post('/data',(req,res)=>{
    const data=req.body;
    console.log(data);
    // console.log(res);
    res.status(200).json({
        message:'Data received successfully',
    })
});

app.listen(3000)