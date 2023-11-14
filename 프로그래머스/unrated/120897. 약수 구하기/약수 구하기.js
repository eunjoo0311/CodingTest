function solution(n) {
    var answer = [];
    let count = 0;
    for(let i =1; i<= n; i++){
        if(n % i == 0){
            answer.push(i)
        }
    }
    console.log(count)
    return answer;
}