function fibbo(n){
    let f1=1;
    let f2=0;
    let f3=0;
    for(let i=3;i<=n;i++){
        f3=f2+f1;
        f2=f1;
        f1=f3;
    }
    if(n==0){
        console.log(f1)
    }
    else if(n==1){
        console.log(f2)
    }
    else{
        console.log(f3)
    }
}
fibbo(8)

