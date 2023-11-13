function solution(array) {
    var answer = [];
    let a = Math.max(...array);
    answer[0] = a
    for(let i = 0; i<array.length; i++){
        if(a == array[i]){
            answer[1] = i
        }
    }
    return answer;
}