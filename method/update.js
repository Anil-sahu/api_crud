onEdit = (id) => {
    $.ajax({
        type: "UPDATE",
        url: "http://localhost:3000/api/student" + id,
        data: {
            name: document.getElementById("name").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            branch: document.getElementById("branch").value,
            fee: document.getElementById("fee").value,
        },
        dataType: "aplication/json",
        success: function (responseText) {
            console.log(responseText.status);
        },
        error: function (error) {
            alert(error.status);
        },
    });
};