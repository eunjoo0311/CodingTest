function solution(n) {
    var answer = 0;
    let result = 1;
    while(true){
        result++
        if(result % 6 == 0 && result % n == 0){
            answer = result /6
            break;
        }
    }
    
    return answer;
}