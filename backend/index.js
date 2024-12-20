const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db')
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.get('/', function (req, res) {
	res.status(200).json({
		msg: 'server is running',
	});
});

app.post('/todo', async function (req, res) {
	const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
});

app.get('/todos', async function (req, res) {
    
        const todos = await todo.find()

        res.json(todos)
});

app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo Marked as completed"
    })
});

app.listen(4000);
