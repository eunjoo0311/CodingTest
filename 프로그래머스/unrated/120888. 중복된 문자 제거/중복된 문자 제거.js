function solution(my_string) {
    var answer = '';
    // 공백도 중복 가능
    answer = [...new Set(my_string)].join('')
    return answer;
}