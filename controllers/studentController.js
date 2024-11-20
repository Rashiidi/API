const db = require("../models/indexStart")

// use the model 
const Student = db.students

module.exports = {

    // add a student
    addStudent : async(req, res, next) =>{

        try{
            let info = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender
            }
            const addStudent = await Student.create(info)
            res.status(200).send(addStudent)
        } catch (error) {
            next(error)
        }
    }, 

    // get all students
    getAllStudents :async (req, res, next)=> {
        try{
            let students = await Student.findAll({})
            res.status(200).send(students)


        } catch (error) {
            next(error)
        }
        
    },

    // get student by id
    getStudent : async(req, res, next)=>{
        try{
            let id = req.params.customer_id
            let student = await Student.findOne({where: {student_id: id}})

            if (!student){
                throw(createError(404, "student does not exist"))
            }
            res.status(200).send(customer)

        } catch (error) {
            next(error)
        }
    },
    
}