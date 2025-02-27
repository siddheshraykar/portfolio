console.log('this is my js file');

function validate(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Enter all details");
      return false;
    } else {
      console.log("Form Submitted Successfully!");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone No:", phone);
      console.log("Message:", message);
      
      return true;
    }
}