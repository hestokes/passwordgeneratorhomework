//Setting up DOM elements
const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const numbersEl = document.getElementById("numbers");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const specialcharactersEl = document.getElementById("specialcharacters");
const generateEl = document.getElementById("generate");


//This object will contain functions that create characters
const randomfunc = {
    number: getNumber,
    lower: getLowercase,
    upper: getUppercase,
    specialcharacter: getSpecialCharacter
}

//Click event to generate password
generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasnumber = numbersEl.checked;
    const hasuppercase = uppercaseEl.checked;
    const haslowercase = lowercaseEl.checked;
    const hasspecialcharacters = specialcharactersEl.checked;


    passwordEl.innerText = generatePassword (
        length, 
        hasnumber, 
        hasuppercase, 
        haslowercase, 
        hasspecialcharacters
        );
});

function generatePassword(number, lower, upper, specialcharacter, length) {
    //STOPPED HERE
    //next steps:
    //1. init pw var
    //2. filter out unchecked types
    //3. loop over length call generator function for each type
    //4. add final pw to the pw var and return

    let generatedPassword  = '';

    const typesCount = number + lower + upper + specialcharacter;

    console.log("typesCount: ", typesCount);

    const typesArr = [lower, upper, number, specialcharacter];
//There is a problem with 'number', it is coming out as 128, which is incorrect
    console.log('typesArr', typesArr);
}


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

function getSpecialCharacter() {
    const specialcharacter = '~!@#%^&*+/{}';
    return specialcharacter[Math.floor(Math.random() *specialcharacter.length)];
};



