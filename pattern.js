function printStarHashAlter(n) {
    // Enter your code here
    for(i=1;i<=n;i++){
        let sym="";
        let gap="";
        for(j=0;j<n-i;j++){
            gap+=" "
        }
        for(k=1;k<=i;k++){
            if(i%2==0){
                sym+="#"+" "
            }
            else{
                sym+="*"+" "
            }
        }
        console.log(gap+sym);
    }
    for (let i = n - 1; i >= 1; i--) {
        let sym = "";
        let gap = "";
        for (let j = 0; j < n - i; j++) {
            gap += " ";
        }
        for (let k = 1; k <= i; k++) {
            if (i % 2 == 0) {
                sym += "# ";
            } else {
                sym += "* ";
            }
        }
        console.log(gap + sym.trim());
    }
}
printStarHashAlter(5)


// let array=[20,21,44,33,28,70,30];
// let temp=array[0];
// for(i=1;i<=array.length-1;i++){
//     temp+=array[i];
//     let 
// }

// function pattern(n){
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=n-i;j++){
//         str+=" "
//     }
//     for(let j=1;j<=i;j++){
//         if(i%3==0){
//             str+="#"+" "
//         }
//         else if(i%2==0){
//             str+=j+" "
//         }
//         else{
//             str+="*"
//         }
//     }
//     console.log(str);
// }

// for(let i=n-1;i>=1;i--){
//     let res=""
//     for(let j=1;j<=n-i;j++){
//         res+=" "
//     }
//     for(let j=1;j<=i;j++){
//         if(i%2==0){
//             res+=j+" "
//         }
//         else{
//             res+="*"
//         }
//     }
//     console.log(res);
// }
// }
// pattern(3)


