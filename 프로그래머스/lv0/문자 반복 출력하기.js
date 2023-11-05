function solution(my_string, n) {
  var answer = '';
  let arr = [...my_string];
  for(let i = 0; i< arr.length; i++){
      answer += arr[i].repeat(n)
  }
  return answer;
}