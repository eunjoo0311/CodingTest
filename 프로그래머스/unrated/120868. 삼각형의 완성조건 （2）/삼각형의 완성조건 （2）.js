function solution(sides) {
    // answer = 가장 긴변 + 나머지 한변이 긴변
    var answer = 0;
    let long = 0;
    let short = 0;
    let arr = [];
    // 가장 길때로 : 두 변의 길이중 큰 값 < result < 합    
    if(sides[0] >= sides[1]){
       long = sides[0]
        short = sides[1]
    } else {
        long = sides[1]
        short = sides[0]
    }
    for(let i = long; i<sides[0]+sides[1]; i++){
        arr.push(i)
    }
    for(let j = long-short+1; j<=long; j++){
        arr.push(j)
    }
    answer = [...new Set(arr)];
    return answer.length;
}