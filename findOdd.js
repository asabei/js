
function findOdd(A) {
  const unique = [...new Set(A)];
  let numbersarray = {};

  for (i = 0; i < unique.length; i++) {
    let index = A.indexOf(unique[i]);
    let count = 0;
    while (index !== -1) {
      count++;
      index = A.indexOf(unique[i], index + 1);
    }
    numbersarray[`${unique[i]}`] = count;
  }
  let answer = null;
  Object.entries(numbersarray).forEach(([key, value]) => { 
    if (value % 2 !== 0) {
        
      console.log(key);
      answer = key;
    } 
  });
  return parseInt(answer);
}
