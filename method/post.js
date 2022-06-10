
// $(document).ready(function () {
//     $("button").click(function () {
//         $.ajax({
//             type: "POST",
//             url: "http://localhost:3000/api/v1/student",
//             data: {
//                 name: document.getElementById("name").value,
//                 mobile: document.getElementById("mobile").value,
//                 email: document.getElementById("email").value,
//                 branch: document.getElementById("branch").value,
//                 fee: document.getElementById("fee").value,
//             },
//             dataType: "application/json",
//             success: function (responseText) {
//                 console.log(this.insertNewRecord);
//                 alert("Student added successfully");
//             },
//             error: function (error) {
//                 alert(error.status);
//             },
//         });
//     });
// });

// $(document).ready(function () {
//     $("button").click(function () {
//         $.ajax({
//             type: "POST",
//             url: "http://localhost:3000/api/v1/student",
//             data: {
//                 name: document.getElementById("name").value,
//                 mobile: document.getElementById("mobile").value,
//                 email: document.getElementById("email").value,
//                 branch: document.getElementById("branch").value,
//                 fee: document.getElementById("fee").value,
//             },
//             dataType: "application/json",
//             success: function (responseText) {
//                 console.log(this.insertNewRecord);
//                 alert("Student added successfully");
//             },
//             error: function (error) {
//                 alert(error.status);
//             },
//         });
//     });
// });

function postData() {
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/v1/student", true);
    request.getResponseHeader("Content-type", "application/json");
    var stdname = document.getElementById("name").value;
    var stdmobile = document.getElementById("mobile").value;
    var stdemail = document.getElementById("email").value;
    var stdbranch = document.getElementById("branch").value;
    var stdfee = document.getElementById("fee").value;

    let obj = {
        "name": stdname,
        "mobile": stdmobile,
        "email": stdemail,
        "branch": stdbranch,
        "fee": stdfee,
    }

    request.send(obj)
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(this.responseText);
            alert("added successful");

        } else {
            console.log(this.status);
        }
    }
}  