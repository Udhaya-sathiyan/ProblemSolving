// function hallowSquare (n) {
//     // Enter your code here
//     for( let i=1;i<=n;i++){
//     let str=""
//     // for(let j=1;j<=n;j++){
//     //     str+="* "
//     // }
//   for(let k=1;k<=n;k++){
//       if(i===1 || i===n){
//           str+=i+" "
//       }
//       else if(k===1 || k===n){
//     str+="* "
//       }
//       else{
//           str+="  "
//       }
//   }
//   console.log(str)
// }
// }
// hallowSquare (4)

// // function fibo(n){
  function fibbo(n){
    let f1=1;
    let f2=0;
    let f3=0;
    for(i=3;i<=n;i++){
      f3=f1+f2;
      f2=f1;
      f1=f3;
    }
    if(n==1){
      console.log(0)
    }
    else if(n==2){
      console.log(1)
    }
    else{
      console.log(f3)
    }
  }

fibbo(8)

// // // Given a value n print the below pattern n = 3

// // function pattern(n){
// // for(i=1;i<=n;i++){
// //   let sym="";
// //   for(j=1;j<=n;j++){
// //     if(j%2==0){
// //       sym+="#"
// //     }
// //     else{
// //       sym+="*"
// //     }
// //   }
// //   console.log(sym)
// // }
// // }
// // pattern(5)

let n=6;
for(let i=n;i>0;i--){
  str="";
  gap="";
  if(i%2!==0){
      str=str+i;
    for(let i=1;i<=n-1;i++ ){
      gap=gap+" ";
    }
    console.log(gap+str)
  }
  else{
  for(let j=0;j<i;j++){
    str=str+"*";
  }
  for(let k=0;k<n-i;k++){
    gap=gap+" ";
  }
  console.log(gap+str)
}
}

function isPerfectNumber(num) {

 
  let str=0;
  
  for(i=1;i<num;i++){
      if(num%i==0){
          str+=i;
      }
  }
 
  if(str==num){
      console.log("Perfect");
  }
  else{
      console.log("Not perfect")
  }
 
  
}
isPerfectNumber(6)

function pat(n){
  for(i=1;i<=n;i++){
    let str="";
    if(i%2!==0){
      for(j=1;j<=i;j++){
        str+="*"+" ";
      }
    }
    else{
      str+=i;
    }
    console.log(str)
  }
}
pat(5)

function patternPrint(n){
  for(i=n;i>=1;i--){
    let str="";
  
    for(k=1;k<=i;k++){
      str+="*"+" ";
    }
    console.log(str);
  }
}
patternPrint(5);

function Sauare(n){
  for(i=1;i<=n;i++){
    let str="";
   for(j=1;j<=n;j++){
    if(i==1||i==n){
      str+="*"+" ";
    }
    else if(j==1||j==n){
      str+="*"+" "
    }
    else{
      str+="  ";
    }
   }
   console.log(str);
  }
}
Sauare(4)





 

