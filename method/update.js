

function closeForm() {
    
   document.getElementById("myForm").style.display='none';
  document.getElementById("employeeList").style.display = "block";
  window.location.reload();
 
};




// function onEdit(id) {

//     const request = new XMLHttpRequest();
//     request.open("PUT", "http://localhost:3000/api/v1/student/" + id, true);
//     request.getResponseHeader("Content-typ", "application/json");
//     var stdname = document.getElementById("stdname").value;
//     var stdmobile = document.getElementById("stdmobile").value;
//     var stdemail = document.getElementById("stdemail").value;
//     var stdbranch = document.getElementById("stdbranch").value;
//     var stdfee = document.getElementById("stdfee").value;

//     let obj = {
//         name: stdname,
//         mobile: stdmobile,
//         email: stdemail,
//         branch: stdbranch,
//         fee: stdfee,
//     }

//     request.send(obj)
//     request.onreadystatechange = function () {
//         if (request.readyState == 4 && request.status == 200) {
//             console.log(this.responseText);
//             alert("Update successful");
//             closeForm();
//         } else {
//             console.log(this.status);
//         }
//     }
// }  



$(document).ready(function () {
    $("#btn").click(function () {
        $.ajax({
            type: "PUT",
            url: "http://localhost:3000/api/v1/student/"+document.getElementById("stdid").value,
            data: {
              name: document.getElementById("stdname").value,
              mobile: document.getElementById("stdmobile").value,
              email: document.getElementById("stdemail").value,
              branch: document.getElementById("stdbranch").value,
              fee: document.getElementById("stdfee").value,
            },
            dataType: "application/json",
            success: function (responseText) {
           
                window.location.reload();
                // closeForm();

            },
            error: function (error) {
                alert(error.status);
            },
        });
    });
});