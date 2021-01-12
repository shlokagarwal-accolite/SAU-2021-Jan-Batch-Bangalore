let s = window.prompt("Enter the string");
var letters = /^[A-Za-z]+$/;
var lower_case_letters = /^[a-z]+$/;
var upper_case_letters = /^[A-Z]+$/;
let result = "";
for(let i = 0;i < s.length; i++){
  let k = s[i];
  if(k.match(lower_case_letters)){
      k = k.toUpperCase();
      result = result.concat(k);
  }
  else if(k.match(upper_case_letters)){
      k = k.toLowerCase();
      result = result.concat(k);
  }
}
console.log(result);
