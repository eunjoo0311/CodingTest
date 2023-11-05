function solution(n) {
  var answer = 0;
  let count = 0;
  // n을 계속 for문으로 나눠서 나머지가 0이 나오는 갯수를 count
  for(let i = 1; i<= n; i++){
      if(n % i == 0){
          count++;
      }
  }
  answer = count
  return answer;
}