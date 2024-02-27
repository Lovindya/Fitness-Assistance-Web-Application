function validationForm() {
    // Get values of form fields
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var occupation = document.getElementById("Occupation").value;
    var email = document.getElementById("email").value;
    var phone_no = document.getElementsByName("phone_no");

    // Validate name field
    if (fname == "") {
      alert("First Name must be filled out");
      return false;
    }

    if (lname == "") {
        alert("Last Name must be filled out");
        return false;
      }
    
      // Validate occupation field
    if (occupation == "") {
      alert("Occupation must be filled out");
      return false;
    }

    if (phone_no == "") {
      alert("Phone number must be filled out");
      return false;
    }

    // Validate email field
    if (email == "") {
      alert("Email must be filled out");
      return false;
    } 
    else if (!validationEmail(email)) {
        alert("Please enter a valid email address");
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