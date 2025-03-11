//Diamond


function diamond (n){
    for(i=1;i<=n;i++){
        let sym="";
        let gap="";
        for(j=0;j<n-i;j++){
            gap+=" ";
        }
        for(k=1;k<=i;k++){
            sym+="#"+" ";
        }
        console.log(gap+sym);
    }
    for(i=n-1;i>=1;i--){
        let gap="";
        let sym="";
        for(j=0;j<n-i;j++){
            gap+=" ";
        }
        for(k=1;k<=i;k++){
            sym+="#"+" ";
        }
        console.log(gap+sym);
    }
}
diamond(6);

//BeautifullArray;

function BeautifullArray(array){
    let str=0;
    for(i=0;i<=array.length-1;i++){
        str+=array[i];
    }

    let num=Number(str);

    if(num%3==0&&num%5==0){
        console.log(1);
    }
    else{
        console.log(0);
    }
}

BeautifullArray([5, 5, 5])

function fibbo(n){
        let f1 = 0;
        let f2 = 1;
        let f3 ;
        if(n==1){
            console.log(f1);
        }
        else if(n==2){
            console.log(f2);
        }
        else{
            for(i=3;i<=n;i++){
                f3 = f1+f2;
                f1 = f2;
                f2 = f3;
            }
            console.log(f3);
        }
}
fibbo(10);



function DiamondPattern(n){
    for(i=1;i<=n;i++){
        let str="";
        for(k=0;k<n-i;k++){
            str+=" "
        }
        for(j=1;j<=i;j++){
            if(j==1||j==n){
                str+="*"+" ";
            }
            else{
                str+=" "
            }
        }
       console.log(str);
    }

    for(i=n-1;i>=1;i++){
        let str="";
        for(k=0;k<n-i;k++){
            str+=" "
        }
        for(j=1;j<=i;j++){
            if(j==1||j==n){
                str+="*"+" ";
            }
            else{
                str+=" "
            }
        }
       console.log(str);
    }

}
DiamondPattern(5)
