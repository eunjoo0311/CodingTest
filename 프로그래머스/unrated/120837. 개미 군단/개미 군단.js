function solution(hp) {
    var answer = 0;
    const a = Math.floor(hp / 5);
    const b = Math.floor((hp - a *5) /3);
    const c = hp - a*5 - b*3
    answer = a +b +c
    return answer;
}