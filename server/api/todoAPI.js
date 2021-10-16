const express = require('express');
const router = express.Router();

const queries = require('../db/queries')
const validTodo = require('../lib/validations').validTodo;
const validId = require('../lib/validations').validId;


router.get('/', (req, res)=>{
    queries
    .getAll()
    .then(todos =>{
        res.json(todos);
    })
})
router.get('/:id', (req, res) => {
    const id = req.params.id;
    queries
    .getOne(id)
    .then(todo =>{
        res.json(todo);
    })
})

router.post('/', (req, res)=>{
    if(validTodo(req.body)){
        const todo = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            date: new Date()
        }
        queries.create(todo)
        .then(ids=>{
            res.json({
                id: ids[0]
            });
        })
    }
    else{
        res.status(500);
        res.json({
            message: 'Invalid Todo'
        })
    }
});

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    if (validId(id)){
        const todo = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            date: new Date()
        }
        queries.update(id, todo)
        .then(ids=>{
            res.json({
                message: "updated"
            });
        })
    }
    else{
        res.status(500);
        res.json({
            message: 'Invalid Todo'
        })
    }
});

router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    if (validId(id)){
        queries.delete(id)
        .then(ids=>{
            res.json({
                message: "deleted"
            });
        })
    }
    else{
        res.status(500);
        res.json({
            message: 'Invalid Todo'
        })
    }
});


module.exports = router;
