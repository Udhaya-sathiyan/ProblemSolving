//Minimum in an array
function MinArray(arr){
    let min = arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        else{
            continue;
        }
    }
    console.log(min)
   
}
MinArray([10,12,78,9,3])

function SecondMax(array){
 let max = [0];
 let Secmax = array[1]
 for(i=1;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
    else{
        continue;
    }
}
for(i=0;i<=array.length-1;i++){
    if(array[i]<max&&array[i]>=Secmax){
        Secmax = array[i]
    }
    else{
        continue;
    }
}
console.log(Secmax);
}
SecondMax([10,12,33,78,9,3])

