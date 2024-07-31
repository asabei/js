function alphabetPosition(text) {
  let str = '';
  for (i = 0; i < text.length; i++) {
    let codeSymbol = text.toLowerCase().charCodeAt(i) - 96;
    console.log(codeSymbol);
    if (codeSymbol > 0 && codeSymbol <= 26) {
      str += ` ${codeSymbol}`;
    } else {
      str +='';
    }
  }
  
  return str.slice(1);
};
