var numbersTillTeens = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
                        'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var tensNumbers = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];

export const inWords = number => {
    var numberInString = "" + number;
    var textStr = "";
    if (numberInString.length > 5) {
        textStr = lakhsConversion(number);
    }
    else if (numberInString.length > 3) {
        textStr = thousandConversion(number);
    }
    else if (numberInString.length > 2) {
        textStr = hundredsConversion(number);
    }
    else {
        textStr = twoDigitToText(number);
    }
    textStr = textStr.substring(0,1).toUpperCase() + textStr.substring(1);
    return textStr;
}

const lakhsConversion = (number : number) => {
    var textStr :string = "";
    textStr += parseInt(number/100000 + "") > 0 ? twoDigitToText(parseInt(number/100000 + "")) + "lakh " : "";
    textStr += number%100000 !== 0 ? thousandConversion(number%100000) : "";
    return textStr;
}

const thousandConversion = (number : number) => {
    var textStr :string = "";
    textStr += parseInt(number/1000 + "") > 0 ? twoDigitToText(parseInt(number/1000 + "")) + "thousand " : "";
    textStr += number%1000 !== 0 ? hundredsConversion(number%1000) : "";
    return textStr;
}
const hundredsConversion = (number : number) => {
    var textStr = "";
    textStr += parseInt(number/100 + "") > 0 ? twoDigitToText(parseInt(number/100 + "")) + "hundred " : "";
    textStr += number%100 !== 0 ? "and " + twoDigitToText(number%100) : "";
    return textStr;
}
const twoDigitToText = (number : number) => {
    var textStr = "";
    if (number > 19) {
        textStr += tensNumbers[parseInt(number/10 + "")];
        textStr += numbersTillTeens[number%10];
    }
    else {
        textStr = numbersTillTeens[number];
    }
    return textStr;
}

export const formatCurrency = (number : number) => {
    if (number) {
        return number.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        })
    }
    else
        return number;
}