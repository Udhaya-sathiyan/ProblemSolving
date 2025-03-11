function lcm(n1,n2){
   let min=Math.max(n1,n1);
   while(true){
    if(min%n1==0&&min%n2==0){
        console.log('The lcm of ${n1} and ${n2} is ${min}')
        break;
    }
    min++
   }

}
lcm(10,20)

function gcd(a,b){
   
}


function gcd (a, b) {
    // Enter your code here
    // a < b OR a > b
    
    let min=Math.min(a,b);
    while(true){
        if(a%min==0&&b%min==0){
            console.log(min);
            break;
        }
        min--
    }
   
}
gcd(5,10);

