function solution(my_string) {
    var answer = 0;
    // 숫자만 남기기
    let a = /[^0-9]/g
    let b = my_string.replace(a, '*')
    console.log(b)
    let c= b.split('*').map(Number)
    console.log(c)
    for(let i = 0; i<c.length; i++){
        answer += c[i]
    }
    return answer;
}