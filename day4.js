
//Given a number n, print the sum of all prime numbers from 1 to n example, if n = 10, output 17 (2 + 3 + 5 + 7)

// function prime(n){
// let sum=0;
// for(i=2;i<n;i++){
//   let prime=true;
//   for(j=2;j<=n;j++){
//     if(i%j===0){
//       prime=false;
//       break;
//     }
//   }
//   if(prime){
//     sum+=i;
//   }
// }
// return sum;
// }
// console.log(prime(10));

function prime(n) {
  let sum = 0;
  
  for (let i = 2; i < n; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prime = false; 
        break;
      }
    }
    
    if (prime) {
      sum += i; 
    }
  }

 console.log(sum);
}

prime(10); 

