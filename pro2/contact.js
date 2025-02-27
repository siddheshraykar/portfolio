console.log("Contact Us")

function contact() {
    event.preventDefault()
    let name=document.querySelector('[name="name"]').value;
    // console.log('Name :-',name)
    let email=document.querySelector('[name="email"]').value;
    // console.log('Email :-',email)
    let num=document.querySelector('[name="number"]').value;
    // console.log('Number :-',num)
    let msm=document.querySelector('[name="textarea"]').value;
    // console.log('massage :-',msm)

    if (name&&email&&num&&msm) {
        console.log('Name :-',name)
        console.log('Email :-',email)
        console.log('Number :-',num)
        console.log('Massage :-',msm)
        alert("Your Details is submited")
    }else{
        alert("Enter your datails")
    }  
}