document.querySelector('.myform').addEventListener("submit",(e) => {
    e.preventDefault();
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var email=document.myform.email.value;
    var number=document.myform.number.value;
    var gender=document.myform.gender.value;
    var dropdown=document.myform.dropdown.value;
    var fullname = name.split(" ");
    //console.log(fullname);
    //console.log(name);
    //console.log(password);
    //console.log(email)
    //console.log(number);
    //console.log(gender)
    //console.log(dropdown);
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var numberRegex = /^[0-9]+$/;
    if(password.length<6){  
        alert("Password must be at least 6 characters long");
        return false;
    }
    if(!(number.match(numberRegex))||number.length<10||number.length>10){
        alert("Invalid number");
        return false;
    }
    if(!(email.match(emailRegex))){
        alert("Invalid email address");
        return false;
    }
    if(dropdown==0){
        alert("Select Course is required field");
        return false;
    }
    else{
        var dropdownValue;
        if(dropdown==1)
        dropdownValue="Java Script";
        else if(dropdown==2)
        dropdownValue="CSS";
        else if(dropdown==3)
        dropdownValue="SQL";
        else if(dropdown==4)
        dropdownValue="HTML";
        else if(dropdown==5)
        dropdownValue="NoSQL";
        //console.log(dropdownValue);
    }
    if(dropdownValue!=undefined){
        var result={
            FirstName: fullname[0],
            LastName: fullname[1],
            Number: number,
            Email: email,
            Gender: gender,
            Course: dropdownValue
        }
    }
    console.log(result);
    document.querySelector(".myform").reset();
});


