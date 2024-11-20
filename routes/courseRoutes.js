const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Add a new course
router.post('/addCourse', courseController.addCourse);
router.get('/getAllCourses', courseController.getAllCourses);
router.get('/getCourse/:course_id', courseController.getCourse);
// router.patch('/updateCourse/:course_id', courseController.updateCourse);
// router.delete('/deleteCourse/:course_id', courseController.deleteCourse);

module.exports = router;
