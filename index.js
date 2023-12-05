function validate(){

    u = document.getElementById("user").value;

    p = document.getElementById("pass").value;

    if(u == "jbk" && p == "123"){

        window.location.href = "login.html"
    }
    else{

        document.getElementById("errorMsg").innerText = "Invalid Username or Password!";
       
    }
}
