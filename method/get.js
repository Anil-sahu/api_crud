getStudent = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/v1/student", true);

    request.onload = function () {
        if (request.status == 200) {
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