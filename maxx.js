
function arrayMax(arr){
    let max=arr[0];
    for (let i = 1; i < arr.length; i++) {
                if (max < arr[i]) {
                     max = arr[i];
                 }
                }
                console.log(max);
}
arrayMax([2,4,8,9,-10])




