function solution(array) {
    var answer = 0;
    let arr = [...String(array)].map(Number)
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 7){
            answer++
        }
    }
    return answer;
}