function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  let top = numer1 * denom2 + numer2 * denom1;
  let bottom = denom1 * denom2;

  const num = (top, bottom) =>
    top % bottom === 0 ? bottom : num(bottom, top % bottom);
  answer[0] = top / num(top, bottom);
  answer[1] = bottom / num(top, bottom);
  return answer;
}
