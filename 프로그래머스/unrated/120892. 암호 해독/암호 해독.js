function solution(cipher, code) {
    var answer = '';
    let arr = [...cipher]
    for(let i = 0; i<=arr.length; i++){
        if(i != 0 && i % code == 0){
            answer += arr[i-1]
        }
    }
    return answer;
}