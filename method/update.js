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

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};




function onEdit(id) {
    const request = new XMLHttpRequest();
    request.open("UPDATE", "http://localhost:3000/api/v1/student/" + id, true);
    request.getResponseHeader("Content-typ", "application/json");
    var stdname = document.getElementById("stdname").value;
    var stdmobile = document.getElementById("stdmobile").value;
    var stdemail = document.getElementById("stdemail").value;
    var stdbranch = document.getElementById("stdbranch").value;
    var stdfee = document.getElementById("stdfee").value;

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
            alert("Update successful");
            closeForm();
        } else {
            console.log(this.status);
        }
    }
}  