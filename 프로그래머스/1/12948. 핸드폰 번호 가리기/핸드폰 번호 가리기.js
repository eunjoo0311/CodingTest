function solution(phone_number) {
    var answer = '';
    //  뒷 4자리를 제외한 나머지 숫자를 전부 *
    answer = phone_number.slice(-4);
    
    for(let i = 0; i<phone_number.length-4; i++){
        answer = '*' + answer
    }
    return answer;
}