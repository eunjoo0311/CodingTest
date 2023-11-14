function solution(age) {
    // a는 0, b는 1, c는 2, ..., j는 9
    let answer = [];
    let a = [...String(age)].map(Number);

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            answer.push('a');
        } else if (a[i] === 1) {
            answer.push('b');
        } else if (a[i] === 2) {
            answer.push('c');
        } else if (a[i] === 3) {
            answer.push('d');
        } else if (a[i] === 4) {
            answer.push('e');
        } else if (a[i] === 5) {
            answer.push('f');
        } else if (a[i] === 6) {
            answer.push('g');
        } else if (a[i] === 7) {
            answer.push('h');
        } else if (a[i] === 8) {
            answer.push('i');
        } else if (a[i] === 9) {
            answer.push('j');
        }
    }

    return answer.join('');
}
