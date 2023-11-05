function solution(x, n) {
    var answer = [];
    // x만큼 n개씩
    for(let i = 1; i<=n; i++){
        answer[i] = x+(i-1)*x;
    }
    answer.shift()
    return answer;
}