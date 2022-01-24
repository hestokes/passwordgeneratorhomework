//Setting up DOM elements
const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const numbersEl = document.getElementById("numbers");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const specialcharactersEl = document.getElementById("specialcharacters");
const generateEl = document.getElementById("generate");

alert("Welcome to Password Generator! Please use the first box below to select the length of your password between 8 and 128 characters.");

alert("After choosing your passord length, use the remaining boxes to choose if you would like to include Numbers, Upper or Lowercase letters, or Special characters. You must choose at least one!");


//This object will contain functions that create characters
const randomfunc = {
    number: getNumber,
    upper: getUppercase,
    lower: getLowercase,
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
        hasnumber, 
        hasuppercase, 
        haslowercase, 
        hasspecialcharacters,
        length
        );
});

function generatePassword(number, upper, lower, specialcharacter, length) {
    //STOPPED HERE
    //next steps:
    //1. init pw var
    //2. filter out unchecked types
    //3. loop over length call generator function for each type
    //4. add final pw to the pw var and return

    let generatedPassword  = '';

    const typesCount = number + upper + lower + specialcharacter;

    // console.log("typesCount: ", typesCount);

    const typesArr = [{number}, {upper}, {lower}, {specialcharacter}].filter
    (
        item =>Object.values(item)[0]
    );

    // console.log('typesArr', typesArr);

    if(typesCount === 0) {
        
        confirm("You must select at least one box to continue!");
        
        return "";
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
           const funcName = Object.keys(type) [0];
        // console.log("funcName:", funcName);

           generatedPassword += randomfunc[funcName]();
        });

    
    }
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
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



