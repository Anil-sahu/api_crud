onDelete = (id) => {
    const request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:3000/api/v1/student/" + id);
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            var a = JSON.parse(request.responseText);
            console.log(a);
        } else {
            console.log(request.status);
        }
    };
};
