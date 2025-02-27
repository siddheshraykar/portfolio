function massage() {
    event.preventDefault()
    let email=document.querySelector('[name="email"]').value;
    // console.log('Email:-',email)
    if (email) {
        console.log('Email:-',email)
        alert("Your Gmail is submited")
    } else {
        alert("Please enter Your Gmail")
    }     
}