

function addNumber(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

function findMaxNumber(){
    let maxValue = Math.max(... numbers);
    return maxValue;
}

function addOnlyNumbers(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        const element = parseFloat(array[i]);
        if(!isNaN(element)){
            sum += element;
        }
    }
    return sum;
}

function getDigits(string){
    let digit = string.match(/\d/g);
    if(!digit){
    return "No digits found!";
    }
    else{
        return digit.join(" ");
    }
}

function reverseString(string){
    let reversedString = "";
    for(i=string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString;
}

function getCurrentDate(){
    const date = new Date();
    const format = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const currentDate = date.toLocaleDateString('en-US', format);
    return currentDate;
}