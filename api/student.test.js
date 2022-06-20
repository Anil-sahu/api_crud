const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./index");

chai.should();
chai.use(chaiHttp);

/*------------------------Get all student--------------------------*/

describe("Get data from  /api/v1/student", () => {
    it("Get all students", (done) => {
        chai.request(server).get("/api/v1/student").end((errr, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});

/*------------------------ wrong address--------------------------*/

describe("Get data from /api/v1/students", () => {
    it("Not Get all student", (done) => {
        chai.request(server).get("/api/v1/students").end((errr, res) => {
            res.should.have.status(404);
            done();
        });
    });
});


/*------------------------Get By Id--------------------------*/

describe("Get data from /api/v1/student/:id", () => {
    it("It should Get a Student by id", (done) => {
        chai.request(server).get("/api/v1/student/30").end((errr, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');


            done();
        });
    });
});





describe("Get data from /api/v1/student/:id", () => {
    it("It should Get a Student by id", (done) => {
        chai.request(server).get("/api/v1/student/30").end((errr, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');


            done();
        });
    });
});




// describe("Get data from /api/v1/student/:id", () => {
//     it("It should Get a Student by id", (done) => {
//         chai.request(server).get("/api/v1/student/40").end((errr, res) => {
//             res.should.have.status(404);



//             done();
//         });
//     });
// });


/*-------------------post--------------------------*/


describe("POST data into /api/v1/student", () => {
    it("It should post a Student", () => {

        const std = {
            name: "tony",
            mobile: "32457687",
            email: "tony@gmail.com",
            branch: "CSE",
            fee: "50000"
        };
        chai.request(server).post("/api/v1/student").send(std).end((errr, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');

        });

    });
});

/*------------Delete--------------------------*/


describe("DELETE data into /api/v1/student/:id", () => {
    it("It should DELETE a Student", () => {
        chai.request(server).delete("/api/v1/student/33").end((errr, res) => {
            res.should.have.status(200);
        });
    });
});



/*----------------------update--------------------------*/

describe("PUT data into /api/v1/student", () => {
    it("It should update a Student", () => {

        const std = {
            name: "Ranveer",
            mobile: "32457687",
            email: "ranveer@gmail.com",
            branch: "B.Ed",
            fee: "50000"
        };
        chai.request(server).put("/api/v1/student/33").send(std).end((errr, res) => {
            res.should.have.status(200);
            // res.body.should.be.a('array');

        });

    });
});
