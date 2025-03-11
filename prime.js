function prime(a,b){
    let str=""
    for(i=a;i<b;i++){
        let prime=true;
        if(i<2){
            prime=false;

        }
        for(let j=2;j<i;j++){
            if(i%j==0){
                prime = false;
                break;
            }
        }
        if(prime){
            str+=i +",";
        }
        
    }
    if(str==""){
        console.log("no prime number")
    }
    console.log(str.slice(0,-1));
   
}
prime(10,30)

// function prime(a, b) {
//     let str = "";
//     for (let i = a; i <= b; i++) {
//         let prime = true;
//         if (i < 2) prime = false; // Numbers less than 2 are not prime
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {  // Corrected condition
//                 prime = false;
//                 break;
//             }
//         }
//         if (prime) {  // Moved outside the inner loop
//             str += i + " ";
//         }
//     }
//     console.log(str);
// }

// prime(10, 30);

function primeNumber(num){
let isPrime = true;
if(num <= 1){
    return false;
}
else{
    for(i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
}
let num=29;
console.log(primeNumber(num))

function listPrime(a,b){
    let str="";
    for(i=a;i<=b;i++){
        let prime = true;
        if(i<2){
            prime =  false;
        }
        for(j=2;j<=i;j++){
            if(i%j==0){
                prime = false;
                break;
            }
        }
        if(prime){
            str+=i;
        }
    }
    if(str== "" ){
        console.log("There is no prime i this range")
    }
}

listPrime(2,10);
