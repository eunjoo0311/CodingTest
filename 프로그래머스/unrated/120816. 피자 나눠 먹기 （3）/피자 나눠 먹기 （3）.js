//  피자 조각 수 slice와 피자를 먹는 사람의 수 n
function solution(slice, n) {
    var answer = 0;
    if(n % slice == 0){
        answer = n / slice
    }else {
        answer = Math.ceil(n/slice)
    }
    return answer;
}