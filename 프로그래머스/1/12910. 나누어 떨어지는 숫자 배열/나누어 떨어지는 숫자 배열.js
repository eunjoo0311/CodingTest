function solution(arr, divisor) {
    var answer = [];
    let a = []
    for(let i in arr){
        if(arr[i] % divisor == 0){
            a.push(arr[i])
        }
    }
    answer = a.sort((a,b) => (a-b))
    
    if(answer.length===0){
        answer.push(-1)
    }
    return answer;
}