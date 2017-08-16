
function save(firstname, lastname, username, password, type) {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("type", type);
        for (var i in window.localStorage) {
            val = localStorage.getItem(i);
            value = val.split(","); //splitting string inside array to get name
            name[i] = value[1]; // getting name from split string
        }

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    alert('Record with username: ' + username + ' added successfully.');
}