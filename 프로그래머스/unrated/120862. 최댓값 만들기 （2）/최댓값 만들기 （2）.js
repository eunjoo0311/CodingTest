function solution(numbers) {
    var answer = 0;
    let result =0;
    let result2 = 0;
    // 내림차순으로 [0], [1] 곱하기
    // 0보다 작은 수 들끼리 곱해서 비교하기
    let plus = numbers.sort((a,b) => (b-a));
     result = plus[0] * plus[1]
    let minus = numbers.sort((a,b) => (a-b));
     result2 = minus[0]*minus[1]
    if(result >= result2){
        answer = result
    }else{
        answer = result2
    }
    return answer;
}