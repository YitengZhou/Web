const express = require('express');
const router = express.Router();

const courses= [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

router.get('/',(req,res)=>{
    res.send(courses);
    //res.send([1,2,3]);
});

router.post('/',(req,res)=>{
    const schema = {
        name: Joi.string().min(3).required() //输入最少需要3个字母
    };

    const result = Joi.validate(req.body,schema);
    //console.log(result);

    if (result.error){
        //if (!req.body.name || req.body.name.length <3){
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        //如果未使用joi
        //res.status(400).send('Name is required and should be minimum 3 characters.');
        return;
    }

    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id',(req,res)=>{
    // Look up the course
    // If not existing,return 404
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not find');

    // Validate
    // If invalid, return 400 - Bad request
    // const result = validateCourse(req.body); 用了下述方法就不需要该行了
    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Update course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return  Joi.validate(course,schema);
}

router.delete('/:id',(req,res)=>{
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not find');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index,1);

    // Return the same course
    res.send(course);
});

router.get('/:id',(req,res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not find');
    res.send(course);
    //res.send(req.params.id);
});

router.get('/:year/:month',(req,res)=>{
    //res.send(req.query);
    //http://localhost:3000/api/courses/2020/1?sortBy=name
});

module.exports = router;