function solution(x) {
    var answer = true;
    let result = 0;
    // x string 배열 만들고 다시 숫자 자릿수 더하기
    let arr = [...String(x)].map(Number);
    for(let i = 0; i< arr.length; i++){
        result += arr[i]
    }
    if(x % result == 0){
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}