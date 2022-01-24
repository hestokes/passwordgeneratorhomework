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

