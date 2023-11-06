function solution(dots) {
    var answer = 0;
    let a = dots.flat()
    let 짝수 = [];
    let 홀수 = [];
    for(let i = 0; i<a.length; i++){
        if(i % 2 == 0){
            짝수.push(a[i])
        } else {
            홀수.push(a[i])

        }
    }
    let 큰홀수 = Math.max(...홀수)
    let 작홀수 = Math.min(...홀수)
    
    let 큰짝수 = Math.max(...짝수)
    let 작짝수 = Math.min(...짝수)
    
    answer = Math.abs((큰홀수-작홀수) * (큰짝수-작짝수))
    
    return answer;
}