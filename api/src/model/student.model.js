const dbconn = require("../../config/db.config");


var Student = function (student) {
    this.name = student.name;
    this.mobile = student.mobile;
    this.email = student.email;
    this.branch = student.branch;
    this.fee = student.fee;
}


// get all student

Student.getAllStudent = (result) => {
    dbconn.query("SELECT * FROM student", (error, response) => {
        if (error) {
            console.log("Error message", error);
            result(null, error)
        } else {
            console.log("Student get successful");
            result(null, response);
        }

    });

}


// get student by id

Student.getStudentId = (id, result) => {
    dbconn.query("SELECT * FROM  student WHERE id= ?", id, (error, response) => {
        if (error) {
            console.log("Error while fetching student by id: ", error);
            result(null, error);
        } else {
            result(null, response);
        }
    })
}


// create new student

Student.createStudent = (studentreqData, result) => {
    dbconn.query("INSERT INTO student SET ?", [studentreqData], (error, response) => {
        if (error) {
            console.log("Error while inserting data", error);
            result(null, error);
        } else {
            console.log("Stuedent added successfully");
            result(null, response);
        }
    })

}



Student.updateStudent = (id, studentRequestData, result) => {
    dbconn.query('UPDATE student SET name =?,mobile=?,email=?,branch=?,fee=? WHERE id =?', [studentRequestData.name, studentRequestData.mobile, studentRequestData.email, studentRequestData.branch, studentRequestData.fee, id], (error, response) => {
        if (error) {
            result(null, error);
            console.log("Eroor : ", error);
        } else {
            result(null, response);
            console.log("Updating successfull", response);
        }
    });
}


Student.deleteStudent = (id, result) => {
    dbconn.query('DELETE FROM student WHERE id =?', [id], (error, response) => {
        if (error) {
            result(null, error);
            console.log("Eroor : ", error);
        } else {
            result(null, response);
            console.log("delete successfull", response);
        }
    });
}
module.exports = Student;