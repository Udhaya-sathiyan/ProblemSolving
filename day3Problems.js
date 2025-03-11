//Given an array check if its sum of all of its numbers is divisble by 11 or no
let array =[20,5,25,50,21];
let sum=0;
for(i=0;i<=array.length-1;i++){
    sum+=array[i];
}
if(sum%11==0){
    console.log("Divisible By 11");
}
else{
    console.log("no")
}

//Print the below pattern use $ instead of even numbers in the below pattern for n = 3
//  1

// $ $

//3 3 3

 //$ $

   //1

function pattern(n){
    for(i=1;i<=n;i++){
        let sym="";
        let gap="";
        for(j=0;j<i;j++){
            if(i%2==0){
                sym=sym+"$"+" "
            }
            else{
               sym=sym+i+" "
            }
        }
        for(k=0;k<n-i;k++){
            gap=gap+" "
           }
        console.log(gap+sym);
    }
    

}
pattern(3);

function digitSumFact(n){
    let sum=1;
    let res=0;
    for(i=1;i<=n;i++){
        sum*=i;
        // res+=sum;
    }
    let digit=sum%10;
    if(digit===n){
        console.log('Strong');
    }
    else{
        console.log('Not strong');
    }
}
digitSumFact(145);

function pattern(n){
for(i=1;i<=n;i++){
    for(j=1;j<=n;j++){
        
    }
}
}

