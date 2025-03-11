function pattern(n){
for(i=1;i<=n;i++){
    let sym="";
    let gap="";
    if(i==1||i==n){
        for(j=1;j<=n;j++){
        sym=i+" "
       }
   }
        else if(i<n||i<1){
            gap+=" "
        }
        else{
            sym=i+" ";
        }
    }
    console.log(sym+gap)
}

pattern(3)