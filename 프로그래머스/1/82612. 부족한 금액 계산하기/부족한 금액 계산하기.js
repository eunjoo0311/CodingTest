function solution(price, money, count) {
    var answer = -1;
    let 필요 = 0;
    for(let i =1; i<=count; i++){
        필요 += i*price
    }
    if(필요> money){
        answer = 필요 - money
    }else {
        answer = 0
    }
    
    console.log(필요)
    return answer;
}