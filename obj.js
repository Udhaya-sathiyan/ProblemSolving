// let obj={}
// let arr=['a','b','c','g','g','g','g','g','g','a','b','f']
// for(let i of arr){
//     obj[i] = (obj[i] || 0) + 1
// }
// let maxValue;
// let maxCount=0;
// for(let i in obj){
//     if(obj[i]>maxCount){
//         maxCount=obj[i]
//         maxValue=i
//     }
// }
// console.log(Object.entries(obj));
// for(let [key,value] of Object.entries(obj)){
//     if(value>maxCount){
//         maxCount=value
//         maxValue=key
//     }
// }
// console.log(maxValue);


// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let obj = {};
// console.log(obj[0])
// let arr = [5,4,5,3,4,2,1,5];
// for(let i=0; i< arr.length; i++){
//     console.log(obj)
//     if(obj[arr[i]] === undefined ||obj[arr[i]] == 0){
//         obj[arr[i]] = 1;
//     }
//     else{
//         obj[arr[i]]++
//     }
// }
// let max = 0;
// let res = 0;
// for(let key in obj){
//     // console.log(key +":" +obj[key])
//     if(obj[key] > max){
//         max = obj[key];
//         res = key
//     }
// }
// console.log(obj)
// console.log(res)


function object(arr){
    let obj = {};
    console.log(obj);
    for(let i =0; i<=arr.length-1;i++){
        console.log(obj)
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    console.log(obj)
}
object([2,4,5,5,6,7,2]);
