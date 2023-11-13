function solution(box, n) {
    var answer = 0;
    // 가로 /3 * 세로/3 * 높이 /3
    let 가로 = Math.floor(box[0] /n);
    let 세로 = Math.floor(box[1]/n);
    let 높이 = Math.floor(box[2]/n);
    answer = 가로 * 세로 * 높이;
    return answer;
}