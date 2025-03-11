// function array(arr){
//     let max=arr[0]
//     let count=0;
//     for(i=0;i<=arr.length-1;i++){
//         if(max<arr[i]){
//             max=arr[i]
           
//         }
//     }
//     for(i=0;i<=array.length-1;i++){
//         if(arr[i]==max){
//             count++
//         }
//     }
//     console.log(count)
// }
// array([4,6,6,4,5,9,10,10])



// function findMaxAndCount(arr) {
//     let max = arr[0];  
//     let count = 0;      

    
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }

    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === max) {
//             count++;
//         }
//     }

//     console.log(count);  
// }


// findMaxAndCount([4, 6, 6, 4, 5, 9, 10, 10]);



// function arry(array){
//     let multiple = 1;
//     for(i=0;i<=array.length-1;i++){
//         if(array[i]!=0){
//             multiple=multiple*array[i]
//         }
//     }
//     console.log(multiple);
// }

// arry([2,4,0,7,0,7,])



// function Something(array,target){
//     let Found = false;
//     for(i=0;i<=array.length-1;i++){
//         if(array[i]==target){
//             Found = true;
//             break;
//         }
      
//     }
//     if(Found){
//         console.log("Found")
//     }
//     else{
//         console.log("Not Found")
//     }
// }
// Something(['chennai','Bangalore','Tirunelveli'],'Madurai')



// function TargetNumber(array,target){
//     let count=0;
//     for(i=0;i<=array.length-1;i++){
//         if(array[i]==target){
//             count++;
//         }
//         else{
//             continue;
//         }
//     }
//     console.log(count)
// }
// TargetNumber([2,4,6,4,],4)


// function CountMax(arr){
//     let count=0;
//     let max = arr[0];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
        
//         }
//     }
//      console.log(count)
// }
// CountMax([10,2,5,10,12,12])

// function BinarySearch(arr,tar){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<=right){
//         mid=Math.floor((left+right)/2);
//         if(arr[mid]===tar){
//             return mid;
//         }
//         else if(arr[mid]<tar){
//             left = mid+1;
//         }
//        else if(arr[mid]>tar){
//        right =mid -1;
//        }
//        else{
//         return -1;
//        }
//     }
// }
// console.log(BinarySearch([5,10,20,55,100],5));


function selectionSort(arr) {
for(let i=0;i<arr.length-1;i++){
let minIndex=i;
for(let j=i+1;j<arr.length;j++){
if(arr[j]<arr[minIndex]){
minIndex=j;
}
}
if(minIndex!==i){
    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
}
console.log(arr.join(' '))
}
}
selectionSort([2,5,1,9,7]);





