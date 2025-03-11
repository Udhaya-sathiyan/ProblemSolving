let str="PROGRAM";
console.log(str.split(""));
let con=str.split("");
let count="";
if(con.length%2!==0){
  for(mid=(con.length-1)/2;mid<=con.length-1;mid++){
    count+=con[mid];
    console.log(count);
  }
  for(i=0;i<(con.length-1)/2;i++){
    count+=con[i];
    console.log(count);
  }
}