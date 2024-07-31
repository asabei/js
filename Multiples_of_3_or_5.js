function solution(number){
  let sum = 0;
  if (number > 0) {
    const digitNumber = Number(number);
    for (let i = 1; i < digitNumber; i++) {
      if (i % 3 === 0 && i % 5 === 0 ) {
        sum += i;
      } else if (i % 3 === 0 || i % 5 === 0 ) {
        sum += i;
      }
    }
  }
  return sum;  
};
