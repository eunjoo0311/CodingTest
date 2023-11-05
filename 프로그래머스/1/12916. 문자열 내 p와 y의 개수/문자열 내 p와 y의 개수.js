function solution(s){
    var answer = true;
    let arr = [...s]
    let pCount = 0;
    let yCount = 0;
    // for문으로 먼저 돌리고 if문으로 count 비교해서 아니면 false
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 'p' || arr[i] == 'P'){
            pCount++
        } else if(arr[i] =='y' || arr[i] == 'Y'){
            yCount++
        }
    }
    if(pCount == yCount){
        answer = true;
    } else {
        answer = false
    }
    return answer;
}