function solution(before, after) {
    var answer = 0;
    let arr = [...before].sort().join('');
    let arr1 = [...after].sort().join('');
    console.log(arr, arr1)
    
    if(arr === arr1){
        answer = 1
    } else {
        answer = 0
    }
   
    return answer;
}