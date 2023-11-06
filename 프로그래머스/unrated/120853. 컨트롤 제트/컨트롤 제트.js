function solution(s) {
    var answer = 0;
    // Z를 누르면 이전꺼 삭제
    let a = s.split(' ')
    for(let i = 0; i< a.length; i++){
        if(a[i] === 'Z'){
            answer -= + a[i-1]
        } else {
            answer += Number(a[i])
        }
    }
    return answer;
}