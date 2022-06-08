const express = require("express");
const router = express.Router();

const studentConttroller = require("../controllers/student.controller");


//get all student

router.get("/", studentConttroller.getStudentsList);

//get student by id

router.get("/:id", studentConttroller.getStudentById);

// create new student

router.post("/", studentConttroller.createNewStudent);

// update student details
router.put("/:id", studentConttroller.updateStudent);

// delete  student by id
router.delete("/:id", studentConttroller.deleteStudent);

module.exports = router;