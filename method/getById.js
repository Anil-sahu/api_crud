
      getStudentById = function (id) {
        const request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/api/v1/student/" + id, true);

        request.onload = function () {
          if (request.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data[0].name);
            // console.log(data[0].name);
            document.getElementById("name").value = data[0].name;
            document.getElementById("mobile").value = data[0].mobile;
            document.getElementById("email").value = data[0].email;
            document.getElementById("branch").value = data[0].branch;
            document.getElementById("fee").value = data[0].fee;
          } else {
            console.log(request.status);
          }
        };
        request.send();
      };