const isIsogram = (str) => {
  let i = 0;
  let ii = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    const list = str.toLowerCase();
    
    let letter = str[i].toLowerCase();
    let listnew = list.replace(str[i], "");
    if (listnew.indexOf(letter) >= 1) {
      console.log(letter+1);
      ii++;
      console.log(ii);
      
    } else if (listnew.indexOf(letter) < 1) {
      console.log(letter+2);
      console.log(ii);
      
    }
    
  };
  if (ii > 0) {
    console.log(ii);
    return false; 
  } else {
    console.log(ii);
    return true;
  };
    
};
