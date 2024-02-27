function validationForm() {
    // Get values of form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var radios = document.getElementsByName("rating");

    // Validate name field
    if (name == "") {
      alert("Name must be filled out");
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

    var ratingSelected = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        ratingSelected = true;
        break;
        }
    }
    if (!ratingSelected) {
    alert("Please select a rating.");
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
        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const message = `Dear ${name}, Thank you very much for your feedback. You have rated our site as ${rating}, and your comment was ${comment}.`;

        alert(message);
  }
}


