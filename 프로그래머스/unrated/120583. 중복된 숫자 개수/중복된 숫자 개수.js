function solution(array, n) {
    var answer = 0;
    let count = 0;
    for(let i = 0; i< array.length; i++){
        if(array[i] == n){
            count++;
        }
    }
    answer = count;
    return answer;
}