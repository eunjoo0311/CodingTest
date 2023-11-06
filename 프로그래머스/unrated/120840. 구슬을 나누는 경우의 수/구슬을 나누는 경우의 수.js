function solution(balls, share) {
    function factorial(num) {
        if (num === 0) return 1;
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)));
}
