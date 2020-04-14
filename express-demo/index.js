const express = require('express');
const app = express();

app.use(express.json());

const courses= [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/',(req,res)=>{
    res.send('Hello World???');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
    //res.send([1,2,3]);
});

app.post('/api/courses',(req,res)=>{
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not find');
    res.send(course);
    //res.send(req.params.id);
});

app.get('/api/courses/:year/:month',(req,res)=>{
    //res.send(req.query);
    //http://localhost:3000/api/courses/2020/1?sortBy=name
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
//app.post();
//app.put();
//app.delete();