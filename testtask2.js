const repeatChar = (string) => {
    const chars = [];
    for (i=0; i <= string.length - 1; i++ ) {
        const newString = string.replace(string[i], "")
        if (newString.indexOf(string[i]) > i - 1) {          
            chars.push(string[i]);
        }        
    };    
    return chars;
};
const result = repeatChar('Hello');
console.log(result);