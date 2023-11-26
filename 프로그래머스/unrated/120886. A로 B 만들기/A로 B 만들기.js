function solution(before, after) {
    var answer = 0;
    let b = [...before].sort().join('')
    let a = [...after].sort().join('')
    
    console.log(b)
    console.log(a)
    
    answer = a == b ? 1 : 0
    return answer;
}