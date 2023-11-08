function solution(num_list) {
    var answer = [];
    let 짝수 = 0;
    let 홀수 = 0;
    for(let i = 0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0){
            짝수++;
        } else {
            홀수++
        }
    }
    answer = [짝수, 홀수]
    return answer;
}