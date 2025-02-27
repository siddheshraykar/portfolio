function book_table() {
    event.preventDefault()
    let day=document.querySelector('[name="day"]').value;
    console.log("Day :-",day)
    let time=document.querySelector('[name="time"]').value;
    console.log("Time :-",time)
    let name=document.querySelector('[name="name"]').value;
    console.log("Name :-",name)
    let mob_num=document.querySelector('[name="number"]').value;
    console.log("Mobile_number :-",mob_num)
    let person=document.querySelector('[name="persons"]').value;
    console.log("Persons:-",person)
alert("Your Table is Booked")    
}