let n = window.prompt("Enter the number")
function prime_factors(num) {
  let result = new Set();
  for (let i = 2; i <= num; i++)
  {
    while (is_prime(i) && num % i === 0) 
    {
      result.add(i);
      num = num / i;
    }
  }
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  return result;
}
console.log(prime_factors(n));
