// getStudent = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "http://localhost:3000/api/v1/student", true);

//     request.onload = function () {
//         if (request.status == 200) {
//             var data = JSON.parse(this.responseText);
//             // console.log(data[0].name);
//             for (var j = 0; j < data.length; j++) {
//                 var mydata = data[j];
//                 // console.log(data[0][j]);
//                 insertNewRecord(mydata);
//             }
//         } else {
//             console.log(request.status);
//         }
//     };
//     request.send();
// };

// getStudent();
// var myid;
// insertNewRecord = function (data) {
//     var table = document
//         .getElementById("employeeList")
//         .getElementsByTagName("tbody")[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.id;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.name;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.mobile;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.email;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.branch;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.fee;
//     cell7 = newRow.insertCell(6);


//     cell7.innerHTML = ` <a href ="../pages/edit.html" onClick="getStudentById(${data.id})">link</a>
//     <button onClick="getStudentById(${data.id})" class ="delete">Delete</button>
//                        <button onClick="onDelete(${data.id})" class ="delete">Delete</button>`;
// }


// // get student by id

// getStudentById = function (id) {


//     const request = new XMLHttpRequest();
//     request.open("GET", "http://localhost:3000/api/v1/student/" + id, true);

//     request.onload = async () => {
//         if (request.status == 200) {
//             var datas = JSON.parse(request.responseText);

//             var data = await datas[0];
//             console.log(data['name']);
//             var name = data['name'];
//             document.getElementById('stdname').value = data['name'];
//             document.getElementById("stdmobile").value = data.mobile;
//             document.getElementById("sydemail").value = data.email;
//             document.getElementById("stdbranch").value = data.branch;
//             document.getElementById("stdfee").value = data.fee;

//             window.location.href = "../pages/edit.html";

//         } else {
//             console.log(request.status);
//         }
//     };

//     request.send();
// };




// // delete

// onDelete = (id) => {
//     const request = new XMLHttpRequest();
//     request.open("DELETE", "http://localhost:3000/api/v1/student/" + id);
//     request.send();
//     request.onload = () => {
//         if (request.status == 200) {
//             var a = JSON.parse(request.responseText);
//             console.log(a);
//         } else {
//             console.log(request.status);
//         }
//     };
// };



// // update

// onEdit = (id) => {
//     $.ajax({
//         type: "UPDATE",
//         url: "http://localhost:3000/api/student" + id,
//         data: {
//             name: document.getElementById("name").value,
//             mobile: document.getElementById("mobile").value,
//             email: document.getElementById("email").value,
//             branch: document.getElementById("branch").value,
//             fee: document.getElementById("fee").value,
//         },
//         dataType: "aplication/json",
//         success: function (responseText) {
//             console.log(responseText.status);
//         },
//         error: function (error) {
//             alert(error.status);
//         },
//     });
// };



// // post

