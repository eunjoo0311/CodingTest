function solution(numbers, direction) {
    var answer = [];
    // left index-1 right index+1
    for(let i = 0; i< numbers.length; i++){
    	if(direction == 'right'){
            if(i == 0){
                answer[i] = numbers[numbers.length-1];
            }else {
                answer[i] = numbers[i-1]
            }
    	}else {
            if(i == numbers.length-1){
                answer[i] = numbers[0]
            }else{
            answer[i] = numbers[i+1]
            }
        }
    }
   
    return answer;
}