const squareDigits = (number) => {
  let i = 0;
  let result = '';
  const numberStr = number.toString();
  while (i <= numberStr.length - 1) {
    const digit = Number(numberStr[i]);
    result += (digit * digit).toString();
    i++;
    
  }
  return Number(result);
};
console.log(squareDigits);
