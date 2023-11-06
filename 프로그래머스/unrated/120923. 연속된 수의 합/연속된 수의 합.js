function solution(num, total) {
    var answer = [];
    let first = 0;
    if(num % 2 == 0){
        first = Math.floor(total / num) - num/2+1
    } else {
        first = total / num - Math.floor(num/ 2)
    }
    for(let i = 0; i<num; i++){
        answer[i] = first + i*1
    }
    return answer;
}