function solution(my_string) {
    var answer = [];
    // 숫자만 출력
    let arr = [...my_string];
    console.log(arr)
    let a = /[^0-9]/g;
    let result = [...my_string.replace(a,'')].map(Number);
    
    answer = result.sort((a,b)=> (a-b))
    return answer;
}