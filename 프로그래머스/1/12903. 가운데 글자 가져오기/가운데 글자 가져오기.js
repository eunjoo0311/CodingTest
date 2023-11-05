function solution(s) {
    var answer = '';
    // s를 배열로!
    let arr = [...s];
    if(s.length % 2 == 0){
      let a = s.length /2
      answer = s[a-1] + s[a]  
    } else {
        let b = Math.floor(s.length /2)
        answer = s[b]
    }
    return answer;
}