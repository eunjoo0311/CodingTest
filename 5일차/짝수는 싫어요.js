// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요
function solution(n) {
  var answer = [];
  let a = n % 2;
  if (a === 0) {
    n = n / 2;
  } else {
    n = parseInt(n / 2) + 1;
  }
  for (let i = 0; i < n; i++) {
    answer[i] = 2 * i + 1;
  }
  return answer;
}
