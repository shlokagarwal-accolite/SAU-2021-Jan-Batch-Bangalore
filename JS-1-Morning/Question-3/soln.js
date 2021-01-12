let n = window.prompt("Enter the number");
let set = new Set();
while( n > 0 ){
let d = n % 10;
set.add(d);
n = parseInt( n / 10 );
}
if( set.size === 1 )
console.log(1)
else
console.log(0);
