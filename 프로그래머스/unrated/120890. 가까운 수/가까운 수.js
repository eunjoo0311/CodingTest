function solution(array, n) {
     var answer = 0;
    let arr = [];
    
    for (let i = 0; i < array.length; i++) {
        let result = Math.abs(n - array[i]);
        arr[i] = result;
    }

    let minDistance = Math.min(...arr); // 최소 거리를 계산

    let closestValues = [];

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === minDistance) {
            closestValues.push(array[j]);
        }
    }

    // closestValues 배열에 여러 개의 가장 가까운 값을 가진 요소가 들어 있음
    // 이 중에서 가장 작은 값을 선택
    answer = Math.min(...closestValues);

    return answer;
}