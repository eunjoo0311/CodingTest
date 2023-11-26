function solution(order) {
    var answer = 0;
    let count = 0;
    let arr = [...String(order)].map(Number);
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
        if(arr[i] ==3 || arr[i] ==6 ||arr[i] ==9){
            count++
        }
    }
    answer=count
    return answer;
}