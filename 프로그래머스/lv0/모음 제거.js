function solution(my_string) {
  // 모음을 제거한 문자열을 
  var answer = '';
  const aeiou = ["a", 'e', 'i', 'o', 'u'];
  let arr = [...my_string];
  for(let i = 0; i<arr.length; i++){
      if(!aeiou.includes(arr[i])){
          answer += arr[i]
      }
  }
  
  return answer;
}