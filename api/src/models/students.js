// export default student =
//     { sdname: "Anil", mobile: "32423543534", email: "email@gmail.com", branch: "cse", fee: "45345" };



class Student {
    constructor(name, mobile, email, branch, fee) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.branch = branch;
        this.fee = fee;
    }
}

exports.module = Student;