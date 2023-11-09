function solution(str1, str2) {
    // str1 안에 str2가 있다면 1을 없다면 2

    var answer = 0;
    if(str1.includes(str2)){
        answer =1;
    }else {
        answer =2
    }
    
    return answer;
}