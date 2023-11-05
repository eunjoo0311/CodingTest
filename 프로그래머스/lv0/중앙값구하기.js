function solution(array) {
  var answer = 0;
  let answer1 = 0;
  let i = 0;
  answer1 = array.sort((a,b) => (a-b))
  i = (array.length-1) / 2 
  answer = answer1[i]
  return answer;
}