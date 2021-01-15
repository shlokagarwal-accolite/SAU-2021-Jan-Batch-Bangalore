class input {
    constructor(fname,lname,rnumber,gender,dob,age,department) {
        this.firstname = fname;
        this.lastname = lname;
        this.rollnumber = rnumber;
        this.gender = gender;
        this.dob = dob;
        this.age = age;
        this.department = department;
    }
    setDetail(){
        var detailArray = [];
        detailArray.push(this.firstname);
        detailArray.push(this.lastname);
        detailArray.push(this.gender);
        detailArray.push(this.dob);
        detailArray.push(this.age);
        detailArray.push(this.department);
        localStorage.setItem(this.rollnumber, JSON.stringify(detailArray)); 
        // console.log(this.firstname);
        // console.log(this.lastname);
        // console.log(this.rollnumber);
        // console.log(this.gender);
        // console.log(this.dob);
        // console.log(this.age);
        // console.log(this.department);
    }
}
class output {
    constructor(rnumber) {
        this.rollnumber = rnumber;
    }
    getDetail(){
        var arr = localStorage.getItem(this.rollnumber)
        //console.log(arr);
        if(arr==null){
            alert("No such roll number in local storage")
            return false;
        }
        var res = arr.split(",");
        res[0]=res[0].replace(/[^a-zA-Z ]/g, "");
        res[1]=res[1].replace(/[^a-zA-Z ]/g, "");
        res[2]=res[2].replace(/[^a-zA-Z ]/g, "");
        res[3]=res[3].replace(/[^a-zA-Z0-9-]/g, "");
        res[4]=res[4].replace(/[^a-zA-Z0-9 ]/g, "");
        res[5]=res[5].replace(/[^a-zA-Z ]/g, "");
        document.getElementById("name_getdetail").innerHTML=(res[0]+" "+res[1]);
        document.getElementById("gender_getdetail").innerHTML=(res[2]);
        document.getElementById("dob_getdetail").innerHTML=(res[3]);
        document.getElementById("age_getdetail").innerHTML=(res[4]);
        document.getElementById("department_getdetail").innerHTML=(res[5]);
        return true;
    }
}
function callFunction() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var rollNumber = document.getElementById("rnumber").value;
    var gender = document.myform.gender.value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var department = document.getElementById("department").value;
    var inputObject = new input(firstName,lastName,rollNumber,gender,dob,age,department);
    inputObject.setDetail();
}
function getFunction() {
    var rollNumber = document.getElementById("getRollNumber").value;
    //console.log(rollNumber);
    if(rollNumber==""){
        alert("Please enter roll number");
    }
    else{
        var outputObject = new output(rollNumber);
        var check = outputObject.getDetail();
        if(check)
        document.getElementById("getdetail").style.display = "block";
    }
}