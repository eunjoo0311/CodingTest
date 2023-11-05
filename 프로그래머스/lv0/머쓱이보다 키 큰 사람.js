function solution(array, height) {
  var answer = 0;
  let a = 0;
  for(let i = 0; i<array.length; i++){
      if(array[i]>height){
          a++;
      }
  answer = a
      
  }
  return answer;
}