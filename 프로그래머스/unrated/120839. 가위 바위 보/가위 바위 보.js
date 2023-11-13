function solution(rsp) {
    // 가위는 2 바위는 0 보는 5
    
    var answer = '';
    let arr = [...rsp];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 2){
            answer += 0;
        } else if (arr[i] == 0){
            answer += 5
        } else {
            answer += 2
        }
    }
    return answer;
}