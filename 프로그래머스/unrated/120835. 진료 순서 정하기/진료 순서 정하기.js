function solution(emergency) {
    var answer = [];
    let arr = [...emergency].sort((a,b) =>(b-a));
    answer = emergency.map(item => arr.indexOf(item)+1)
    console.log(arr)
    return answer;
}