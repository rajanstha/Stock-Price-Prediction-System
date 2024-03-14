function mydata()
{
var a = document.getElementById("n1").value;
var b = document.getElementById("n2").value;
//Username cannot be empty
if(a==""){
    alert("Enter your username or email.");
    return false;
}
// Password of minimum length 8
else if(b.length<=7){
    alert("Password should be of minimum 8 digits.");
    return false;
}
else{
    return true;
}

}
