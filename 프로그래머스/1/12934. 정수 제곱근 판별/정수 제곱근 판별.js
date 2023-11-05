function solution(n) {
    var answer = 0;
    let a = Math.sqrt(n);
    let b = Math.floor(a)
    console.log(a,b)
    if(a == b){
        answer = Math.pow(a+1, 2)
    } else{
        answer = -1;
    }
    return answer;
}