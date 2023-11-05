function solution(n) {
    var answer = 0;
    let arr = [...String(n)].map(Number);
    answer = Number(arr.sort((a,b) => (b-a)).join(''))
    return answer;
}