function solution(n) {
    var answer = 0;
    // n이 제곱수라면 1을 아니라면 2
    let a = Math.sqrt(n)
    console.log(a)
    if(n == Math.floor(Math.sqrt(n))* Math.floor(Math.sqrt(n))){
        answer = 1;
    } else{
        answer = 2;
    }
    return answer;
}