// RemoveDuplicates
function Duplicates(arr){
    let uniqueArr = []
    for(let i=0;i<=arr.length-1;i++){
       isDuplicate= false;
        for(let j=0;j<=uniquArr.length-1;j++){
            if(arr[i]===uniqueArr[j]){
            isDuplicate=true;
            break;
            }
        }
        
    }
}