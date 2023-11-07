function solution(s) {
    var answer = true;
    let arr = s.toLowerCase()
    // 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성
    let a = /[a-z]/g
    
    if(a.test(arr)){
        answer = false;
    } else {
        if(arr.length ===4 || arr.length ===6){
            answer = true;
        } else {
            answer = false
        }
    }
    return answer;
   
}