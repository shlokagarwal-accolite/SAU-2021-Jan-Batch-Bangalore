let s = window.prompt("Enter the string");
var digits = /^[0-9]+$/;
let result = 0;
for(let i = 0;i < s.length; i++){
  let k = s[i];
  if(k.match(digits)){
      result = result + parseInt(k);
  }
}
console.log(result);
