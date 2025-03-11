
//Factorial
  function sumOfFactorials(n){
    let sum=0;
    let fact=1;
    for(i=1;i<=n;i++){
        fact*=i;
        sum+=fact;
    }
    console.log(sum);
}

//Prime
function PrimeNumber(a,b){
    let str="";
    for(i=a;i<=b;i++){
        let prime=true;
      if(i<2){
        prime=false;
      }
      for(j=2;j<=Math.sqrt(i);j++){
          if(i%2==0){
            prime=false;
            break;
          }
      }
      if(prime){
        str+=i+" "
      }
     
    }
    console.log(str);
}

PrimeNumber(2,20)

//
function prime(n){
    if(n<1)return false
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true
}

function check(a,b){
    let empty=[];
    for(i=a;i<=b;i++){
        if(prime(i)){
            empty.push(i)
        }
    }
    return empty
}
console.log(check(2,10))


///binary search


function binarySearch(arr, x){
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}
result = binarySearch([2, 3, 4, 10, 40], 2);
if (result == -1)
    console.log(-1)
    else
    {
        console.log("Element is present at index "
                    + result);
    }





function binary(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]<target){
            left=mid+1
        }
        else if(arr[mid]>target){
            right=mid-1
        }
    }
    return -1
}
console.log(binary([1,2,3,4,5,6,7,8],6))

// function union(lis1,lis2){
//     array=[];
//     for(i=0;i<=lis1.length-1;i++){
//         if(lis1[i]!==lis2[i]&&)
//     }
    
// }

//Comparing both arrays for the union Using Includes:
function union(arr1,arr2){
    let result =[];
    for(i=0;i<=arr1.length;i++){
        if(!result.includes(arr1[i])){
            result.push(arr1[i])
        }
        return result
    }
    for(j=0;j<=arr2.length;j++){
        if(!result.includes(arr2[i])){
            result.push(arr2[i])
        }
        return result
    }
}
console.log(union([2,3,2],[3,47,3]))

// WithOut using includes:
function fibbonacci(n){
    let array =[];
    

}


