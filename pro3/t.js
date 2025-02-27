console.log('this is my js file');


function validate(){
    var name=document.getElementById("name");
    // console.log('Name:-',name)
    var email=document.getElementById("email");
    // console.log('Email:-',email)
    var phone=document.getElementById("phone");
    // console.log('Phone No:-',phone)
    var Massage=document.getElementById("Massage");
    // console.log('Massage:-',Massage)



    if(name.value==""||email.value==""||phone.value==""||Massage.value==""){
        alert("Enter the all Details")
        return false;
    }else{
        return true;
    }
    
}
