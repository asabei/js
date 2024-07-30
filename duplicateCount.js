const duplicateCount = (text) => {
  let countchar = 0;
  let arrList = [];
  if (text.length === 0) {
    console.log('0');
    return 0;
  } else {
    for (let i = 0; i < text.length; i++) {
      let chars = text[i];
      if ((/[a-zA-Z]/).test(chars)) {
        let letter = chars.toLowerCase();
        let listnew = text.replace(text[i], "");
        if (listnew.indexOf(letter) >= 0) {
          
          countchar++;
          arrList.push(letter);
          
        } else {
          console.log('none');
        }
      } else {
        let listnew = text.replace(text[i], "");
        if (listnew.indexOf(chars) >= 0) {
          
          countchar++;
          arrList.push(chars);
          
        } 
      }
    }
  }
  const unique = [...new Set(arrList)];
  console.log(unique);
  return unique.length;
};
