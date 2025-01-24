const db = require('../model/index')
const TODO = db.Todo

exports.getTodo = async (req, res) => {
    let data = await TODO.findAll()
    res.status(200).json({
        data: data
    })
}

exports.postTodo = async (req, res) => {
    let process = await TODO.create({
        task: req.body.task
    })
    res.status(200).json({
        message: "Data Inserted"
    })
}