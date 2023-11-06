function solution(my_str, n) {
    var answer = [];
    let arr = [...my_str]
    for(let i=0; i<arr.length/n; i++){
        answer.push(arr.slice(i*n, i*n+n).join(''))
    }
    // console.log(a)
    return answer;
}