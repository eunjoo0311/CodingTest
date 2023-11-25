function solution(my_string) {
    var answer = 0;
    let sum = 0;
    const a = /[^0-9]/g;
    let arr = [...my_string.replace(a,'')]
    console.log(arr)
    for(let i =0; i<arr.length; i++){
        answer += Number(arr[i])
    }
    return answer;
}