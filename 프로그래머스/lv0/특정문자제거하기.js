function solution(my_string, letter) {
  var answer = '';
  let a = [...my_string];
  for(let i = 0; i< a.length; i++){
      if(a[i] !== letter){
          answer += a[i]
      }
  }
  console.log(answer)
  return answer;
}