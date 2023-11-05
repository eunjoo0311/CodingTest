// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다. 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const one = parseInt(input[0]);
const two = parseInt(input[1]);

console.log(one * (two % 10));
console.log(one * Math.floor((two % 100) / 10));
console.log(one * Math.floor(two / 100));
console.log(one * two);
