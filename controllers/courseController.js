const db = require("../models/indexStart");

// Use the model
const Course = db.courses;

module.exports = {

    // Add a course
    addCourse: async (req, res, next) => {
        try {
            let info = {
                courseName: req.body.courseName,
                courseDescription: req.body.courseDescription,
                duration: req.body.duration,
            };
            const newCourse = await Course.create(info);
            res.status(200).send(newCourse);
        } catch (error) {
            next(error);
        }
    },

    // Get all courses
    getAllCourses: async (req, res, next) => {
        try {
            let courses = await Course.findAll({});
            res.status(200).send(courses);
        } catch (error) {
            next(error);
        }
    },

    // Get course by ID
    getCourse: async (req, res, next) => {
        try {
            let id = req.params.course_id;
            let course = await Course.findOne({ where: { course_id: id } });

            if (!course) {
                throw createError(404, "Course does not exist");
            }
            res.status(200).send(course);
        } catch (error) {
            next(error);
        }
    },

    updateCourse: async (req, res, next) => {
        try {
            let id = req.params.course_id;
    
            // Update course
            const [updatedRows] = await Course.update(req.body, { where: { course_id: id } });
    
            if (updatedRows === 0) {
                throw createError(404, "Course does not exist");
            }
    
            res.status(200).send(`Course with ID ${id} updated successfully`);
        } catch (error) {
            next(error);
        }
    },
    
    deleteCourse: async (req, res, next) => {
        try {
            let id = req.params.course_id;
    
            // Delete course
            const deletedRows = await Course.destroy({ where: { course_id: id } });
    
            if (deletedRows === 0) {
                throw createError(404, "Course does not exist");
            }
    
            res.status(200).send(`Course with ID ${id} deleted successfully`);
        } catch (error) {
            next(error);
        }
    }
    
};
