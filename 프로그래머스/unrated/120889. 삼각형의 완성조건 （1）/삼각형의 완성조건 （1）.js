function solution(sides) {
    // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.  변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2
    var answer = 0;
    let arr = sides.sort((a,b) => (b-a));
    if(arr[0] < arr[1]+ arr[2]){
        answer = 1;
    } else {
        answer = 2
    }
    return answer;
}