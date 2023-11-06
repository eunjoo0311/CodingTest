function solution(numbers) {
    const a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    var answer = 0;
    
    for(let i = 0; i<a.length; i++){
        while(numbers.includes(a[i])){
            numbers=numbers.replace(a[i],i.toString());
        }
    }
    console.log(numbers)
    answer = Number(numbers)
    return answer;
}