const express = require('express');
const routes =  express.Router();


//controller call
const todoController = require('./../controller/todo')

routes.get('/todos', todoController.getTodo)


routes.post('/todos', todoController.postTodo)

module.exports = routes;