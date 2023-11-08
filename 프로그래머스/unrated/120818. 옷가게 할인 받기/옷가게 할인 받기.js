function solution(price) {
    //  10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%
    var answer = 0;
    if(price >= 500000){
        answer = price * 0.8
    } else if(price >= 300000){
        answer = price * 0.9
    } else if(price >= 100000){
        answer = Math.floor(price * 0.95)
    } else{
        answer = price
    }
    return answer;
}