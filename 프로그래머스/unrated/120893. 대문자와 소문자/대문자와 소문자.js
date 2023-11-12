function solution(my_string) {
    var answer = '';
    // answer = my_string.toUpperCase();
    let arr = [...my_string];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === arr[i].toLowerCase()){
            answer += arr[i].toUpperCase();
        } else {
             answer += arr[i].toLowerCase();
        }
    }
    return answer;
}