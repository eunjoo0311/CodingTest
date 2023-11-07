function solution(s) {
    var answer = [];
    let arr = s.split(' ').map(Number)
    let a = Math.min(...arr)
    let b = Math.max(...arr)
    
    answer = [a,b].join(" ")


    return answer;
}