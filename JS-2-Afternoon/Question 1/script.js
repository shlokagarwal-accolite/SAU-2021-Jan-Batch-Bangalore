class input {
    constructor(param) {
        this.input = param;
    }
    calculateLength() {
        console.log(this.input.length);
        return this.input.length;
    };
    getUpperCase() {
        console.log(this.input.toUpperCase());
        return this.input.toUpperCase();
    };
    getLowerCase() {
        console.log(this.input.toLowerCase());
        return this.input.toLowerCase();
    };
    getVowel(){
        let str1="";
        for(let i=0;i<this.input.length;i++){
            let k = this.input[i];
            if(k === 'A'||k === 'a'||k === 'E'||k === 'e'||k === 'I'||k === 'i'||k === 'O'||k === 'o'||k === 'U'||k === 'u')
            str1 = str1 + k;
        }
        console.log(str1);
        return str1;
    };
    getConsonant(){
        let str1="";
        for(let i=0;i<this.input.length;i++){
            let k = this.input[i];
            if(k != 'A' && k != 'a' && k != 'E' && k != 'e' && k != 'I' && k != 'i' && k != 'O' && k != 'o' && k != 'U' && k != 'u')
            str1 = str1 + k;
        }
        console.log(str1);
        return str1;
    };
    checkNumber(){
        let regexNumber = /^[0-9]+$/;   
        for(let i=0;i<this.input.length;i++){
            let k = this.input[i];
            if(k.match(regexNumber))
            // alert("There is some digit in the given input")
            return false
        }
        return true;
    };
}
function callFunction() {
    var inputValue = document.getElementById("inputTxt").value;
    let inputObject = new input(inputValue);
    let checkDigit = inputObject.checkNumber();
    if(!checkDigit){
        alert("There is some digit in the given input");
        return false;
    }
    document.getElementById("lengthOp").innerHTML = inputObject.calculateLength();
    document.getElementById("ucOp").innerHTML = inputObject.getUpperCase();
    document.getElementById("lcOp").innerHTML = inputObject.getLowerCase();
    document.getElementById("voOp").innerHTML = inputObject.getVowel();
    document.getElementById("coOp").innerHTML = inputObject.getConsonant();
    inputObject.checkNumber();
}