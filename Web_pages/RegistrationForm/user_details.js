function validationForm() {
    // Get values of form fields
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var age = document.getElementById("age").value;
    var occupation = document.getElementById("Occupation").value;
    var email = document.getElementById("email").value;
    var phone_no = document.getElementsByName("phone_no");
    var gender = document.getElementById("gender").value;
    var activity = document.getElementById("activity").value;
    var time = document.getElementById("time").value;
    var food = document.getElementById("food").value;

    // Validate name field
    if (fname == "") {
      alert("First Name must be filled out");
      return false;
    }

    else if  (lname == "") {
        alert("Last Name must be filled out");
        return false;
      }
      else if (age == "") {
        alert("Age must be filled out");
        return false;
      }
      else if (isNaN(age)) {
        alert("Age must be valied");
        return false;
      }
    
      // Validate occupation field
    
    else if (phone_no == "") {
      alert("Phone number must be filled out");
      return false;
      }  

    else if (occupation == "") {
      alert("Occupation must be filled out");
      return false;
    }
    else if  (gender == "") {
      alert("Gender must be filled out");
      return false;
    }

    // Validate email field
    else if (email == "") {
      alert("Email must be filled out");
      return false;
    } 
    else if (!validationEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    else if  (activity == "") {
      alert("Activity must be filled out");
      return false;
    }
    else if  (food == "") {
      alert("Food type must be filled out");
      return false;
    }
    else if  (time == "") {
      alert("Time must be filled out");
      return false;
    }
    

    return true;

 
}

// Email validation function
function validationEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email); 
  }

function showPopup(){
  if (validationForm() == true) {
        const firstname = document.getElementById("Fname").value;
        const lastname = document.getElementById("Lname").value;
 
        const message = "Dear "+ firstname + " " + lastname + ", Thank you for using FitDynasty, The results will be shown in a while"

        alert(message);
  }
}