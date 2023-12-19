function solution(num_list) {
    var answer = 0;
    let 곱 = 1;
    let 합 = 0;
    
    for(let i = 0; i< num_list.length; i++){
        console.log(num_list[i])
        곱 *= num_list[i]
        합 += num_list[i]
    }
    if(곱 < 합 * 합){
        answer = 1
    } else {
        answer =0
    }
    return answer;
}