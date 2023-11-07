function solution(n) {
    var answer = 0;
    let sum = 1;
    for(let i = 1; i<=10; i++){
        sum *= i
        console.log(sum)
        if(n < sum){
            answer = i-1
            break;
        } else if (n === sum){
            answer=i
        }
        
    }
    return answer;
}