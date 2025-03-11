// Array
function RemoveDublicate(arr){
   let array = [];
   for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            array.push(arr[i]);
        }
        else{
            continue;
        }
    }
   }
      console.log(array.join(" "))
}
RemoveDublicate([2,4,6,4,8,2,5,10,6])