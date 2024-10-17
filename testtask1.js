
const getArray = (max, min, arrayLength) => {
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        newArray.push(Math.random() * (max - min) + min);
        
    }
    return newArray;
};
const minMaxAverage = (array) =>{
    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = array.reduce((sum, value) => sum + value, 0) / array.length; // 
    return { min, max, average };
};
const lengthArray = (min, max) => {
    const length = Math.floor(Math.random() * (max - min + 1)) + min; 
    return length;
};
const minMaxValue = {
    min : 0,
    max : 1
}
const minMaxLength = {
    min : 5,
    max : 10
}

const length = lengthArray(minMaxLength.min, minMaxLength.max);
const randomArray = getArray(minMaxValue.max, minMaxValue.min, length);
const result = minMaxAverage(randomArray);
console.log(randomArray);
console.log(result);
console.log(length);