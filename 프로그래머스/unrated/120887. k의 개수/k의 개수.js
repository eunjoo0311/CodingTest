function solution(i, j, k) {
    var answer = 0;
    for(let a = i; a<=j; a++){
        let arr = [...String(a)]
        for(let b = 0; b<arr.length; b++){
            if(arr[b]===String(k)){
                answer++
            }
        }
    }
    return answer;
}