getStudent = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/v1/student", true);

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(this.responseText);
            // console.log(data[0].name);
            for (var j = 0; j < data.length; j++) {
                var mydata = data[j];
                // console.log(data[0][j]);
                insertNewRecord(mydata);
            }
        } else {
            console.log(request.status);
        }
    };
    request.send();
};

getStudent();

insertNewRecord = function (data) {
    var table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mobile;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.branch;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.fee;
    cell7 = newRow.insertCell(6);


    cell7.innerHTML = ` 
    <button onClick="openForm(${data.id})" class ="edit">edit</button>
                       <button onClick="onDelete(${data.id})" class ="delete">delete</button>`;
}


function openForm(id) {
    document.getElementById("myForm").style.display = "block";
    getStudentById(id)
}

getStudentById = function (id) {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/v1/student/" + id, true);

    request.onload = function () {
        if (request.status == 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById("stdid").value = data[0]['id'];
            document.getElementById("stdname").value = data[0]['name'];
            document.getElementById("stdmobile").value = data[0]['mobile'];
            document.getElementById("stdemail").value = data[0]['email'];
            document.getElementById("stdbranch").value = data[0]['branch'];
            document.getElementById("stdfee").value = data[0]['fee'];


        } else {
            console.log(request.status);
        }
    };
    request.send();
};