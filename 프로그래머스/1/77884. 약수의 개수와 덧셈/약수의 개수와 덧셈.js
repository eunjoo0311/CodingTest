function solution(left, right) {
    // left<= dd <= right, 약수의 개수 짝수는 더하기, 홀수는 빼기
    var answer = 0;
    let arr = []
    let arr1 = []
    for(let i = left; i<= right; i++){
        arr1.push(i)
        let count = 0;
        for(let j = 0; j<=i; j++){
            if(i % j == 0){
                count++
            }
        }
        arr.push(count);
    }
    for(let k = 0; k<arr.length; k++){
        if(arr[k] % 2 == 0){
            answer += arr1[k]
        } else {
            answer -= arr1[k]
        }
    }
    
    return answer;
}