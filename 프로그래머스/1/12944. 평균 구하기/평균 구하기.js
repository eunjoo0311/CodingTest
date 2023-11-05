function solution(arr) {
    var answer = 0;
    let sum = 0;
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
        sum = (arr[i] + sum )

    }
    answer =  sum / arr.length
    return answer;
}