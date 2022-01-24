//Setting up DOM elements
const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const numbersEl = document.getElementById("numbers");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const specialcharactersEl = document.getElementById("specialcharacters");
const passwordEl = document.getElementById("password");


//This object will contain functions that create characters
const randomfunc = {
    number: getNumber,
    lower: getLowercase,
    upper: getUppercase,
    symbol: getSymbol
}

//Click event to generate password

//generate functions for password characters
function getNumber() {
    
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getLowercase() {
    
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getUppercase() {
    
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getSymbol() {
    const symbol = '~!@#%^&*+/{}';
    return symbol[Math.floor(Math.random() *symbol.length)];
};

console.log(getSymbol());

