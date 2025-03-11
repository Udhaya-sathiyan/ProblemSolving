function digit(n){
    let num=n;
    let digit;
  if(num<10){
    console.log(n)
  }
  while(num>10){
    let sum=0;
    while(num>0){
        digit=num%10;
        sum+=digit;
        num=Math.trunc(num/10); 
    }
    num=sum;
  }
  console.log(num)
}
digit(2469878)
