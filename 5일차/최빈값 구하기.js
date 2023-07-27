// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
function findMode(arr) {
  // 배열 정렬
  arr.sort((a, b) => a - b);

  let modes = [];
  let currentCount = 1;
  let maxCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      modes = [arr[i]];
    } else if (currentCount === maxCount) {
      modes.push(arr[i]);
    }
  }

  return modes;
}

const numbers = [1, 2, 3, 2, 2, 4, 5, 4];
console.log(findMode(numbers)); // [2]
