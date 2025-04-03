// Reverse the Number 
// First Way
function ReverseNumbers(numbers){
   let num = numbers.toString()
   let str="";
   for(let i =num.length-1;i>=0;i--){
    str+=num[i]+" ";
   }
   console.log(str)
}
ReverseNumbers(789654)

