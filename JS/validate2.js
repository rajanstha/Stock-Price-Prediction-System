function signup() {
    var x = document.getElementById("Fname").value;
    var y = document.getElementById("Lname").value;
    var z = document.getElementById("Pword").value;
    var w = document.getElementById("Cword").value;
    var m = document.getElementById("email").value;
    if (x == "" || y == "") {
        alert("Name required");
    }
    else if (z.length <= 7) {
        alert("Password should be of minimum 8 digits.");
        return false;
    }
    else if (m == "" || !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(m))
    {
        alert("Email format not valid");
    }

    else if (z != w)
    {
        alert("Password doesnt match");
    }
    else
    {
        return true;
    }
}

