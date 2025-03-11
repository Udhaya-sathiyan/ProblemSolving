function prientmaxsum(arr){
    let start;
    let end;
    let output=0
    let point
      for(let i=0;i<arr.length;i++){
        start=arr[i]
        end=arr[i+1]
        let sum=start+end
    if(output<sum){
      output= sum
     point=start+" "+ end
    }
      }
      console.log(output);
      console.log(point);
      }
      prientmaxsum([14,11,14,24,12,])