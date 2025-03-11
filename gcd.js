// function gcd (a, b) {
//     let i = Math.min(a,b);
//     while(true){
//    if(a%i==0&&b%i==0){
//     break;
//     }
//     i--;
//     }
//     if(i==1){
//         console.log("co-prime");
//     }
//     else{
//         console.log("not a co prime");
//     }
 
//  }
// gcd (18, 7);



function areCoPrime(a, b) {
    // Enter your code here 
   let c=0;
   let res=1;
   if(a>b){
       c=a
   }
   else{
       c=b
   }
   for(i=c;i>=1;i--){
       if(a%i==0&&b%i==0){
           res=i;
          break;
       }
   }
   if(res==1){
       console.log("co-prime")
   }
   else{
       console.log("Not a co-prime")
   }
}
areCoPrime(12,18)


// Function to calculate GCD using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a,b){
    return Math.abs((a*b)/gcd(a,b))
  }
  
  
  // Function to check if two numbers are co-prime
  function areCoPrime(a, b) {
    let g = gcd(a, b);
    if (g === 1) {
      console.log("co-prime");
    }
    else {
      console.log("Not a co-prime");
    }
  
  }