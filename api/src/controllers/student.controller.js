
const StudentModel = require("../model/student.model");
//get all student list

exports.getStudentsList = (req, res) => {

    console.log("all student");
    StudentModel.getAllStudent((err, students) => {
        console.log(students);
        if (err) {
            res.send(err);
        } else {
            res.send(students);
            console.log("Students : ", students);
        }
    })

}


// get employee by id

exports.getStudentById = (req, res) => {

    StudentModel.getStudentId(req.params.id, (error, student) => {
        if (error) {
            console.log("Error:", error)
            res.send(error);
        } else {
            console.log(student);
            res.send(student);
        }
    })

}

// create new student
exports.createNewStudent = (req, res) => {
    console.log("create new student successful", req.body);

    const studentRequestData = new StudentModel(req.body);
    if (req.body.constructor === Object && Object(req.body).length == 0) {
        res.send(400).send({ success: false, message: "please fill all fields" });
    } else {
        StudentModel.createStudent(studentRequestData, (error, student) => {
            if (error) {
                console.log("Student added successfull : ", error);
                res.send(error);
            } else {

            }
        })
    }
}


// update student details

exports.updateStudent = (req, res) => {
    console.log("Update student data successful", req.body);

    const studentRequestData = new StudentModel(req.body);
    if (req.body.constructor === Object && Object(req.body).length == 0) {
        res.send(400).send({ success: false, message: "please fill all fields" });
    } else {
        StudentModel.updateStudent(req.params.id, studentRequestData, (error, student) => {
            if (error) {
                console.log("Error while adding student : ", error);
                res.send(error);
            } else {
                res.json({ status: true, message: "update successfull", data: student.insertId })
            }
        })
    }

}


// delete student bu id

exports.deleteStudent = (req, res) => {
    StudentModel.deleteStudent(req.params.id, (error, student) => {
        if (error) {
            console.log("Error", error);
            res.send(error);
        } else {
            res.send(student);
        }
    });
}

