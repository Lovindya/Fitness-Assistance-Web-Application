function validationForm(){
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var age = document.getElementById("Lname").value;
    var occupation = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var phone_no = document.getElementsByName("phone_no");
    var phy_Activites = document.getElementById("")

    if (fname==" "){
        alert("First name must filled out");
    }
    else if (lname==" "){
        alert("Last name must filled out");
    }
    else if (age==" "){
        alert("Age must filled out");
    }
    else if (occupation==" "){
        alert("Occupation name must filled out");
    }
    else if (email==" "){
        alert("Email must filled out");
    }
    else if (phone_no==" "){
        alert("Phone number must filled out");
    }
}