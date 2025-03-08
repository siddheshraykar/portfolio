console.log('This is my GYM page')

function massage(event) {
    event.preventDefault()
    let email=document.querySelector('[name="email"]').value;
    if (email) {
        console.log('Email:-',email)
        alert("Your Gmail is submited")
        document.getElementById('email').value="";
    } else {
        alert("Please enter Your Gmail")
    }     
}



function contact(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("textarea").value;

    if (name || email || number || message) {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Number:', number);
        console.log('Message:', message);
        
        alert("Your details have been submitted");

        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("number").value = '';
        document.getElementById("textarea").value = '';
    } else {
        alert("Please enter your details");
    }
}


