const express = require('express');
const routes =  express.Router();

//calling helper function
const uploadFile = require('./../helper/file_helper')

//controller calling
const studentController =  require('./../controller/student/index')

routes.get('/add-student', studentController.getAddStudent)
routes.get('/all-students', studentController.getAllStudent)
routes.get('/delete-student/:id', studentController.deleteStudent)
routes.get('/edit-student/:id', studentController.getEditStudent)
routes.get("/add-fine/:id", studentController.addFine)

routes.post('/save-student', uploadFile, studentController.postStudentData )
routes.post('/update-student/:ramey', studentController.updateStudent)

module.exports = routes;