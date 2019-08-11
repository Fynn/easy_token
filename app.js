const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lettersUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lettersLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



function generateToken(lenght = 11) {

    let token = [];
    let counter = 1;

    const arrays = [numbers, lettersUppercase, lettersLowercase];
    while(counter <= lenght) {
        
        const randomArray = Math.floor(Math.random() * arrays.length) + 0;
        const randomNumber = Math.floor(Math.random() * arrays[randomArray].length) + 0;

        const randomCharacter = arrays[randomArray][randomNumber];

        token.push(randomCharacter);
        counter++;
        
    }
    return token.join("");
}



function generateNumberToken(lenght = 11) {

    let token = [];
    let counter = 1;
    const arrays = [numbers];
    while(counter <= lenght) {
        
        const randomArray = Math.floor(Math.random() * arrays.length) + 0;
        const randomNumber = Math.floor(Math.random() * arrays[randomArray].length) + 0;

        const randomCharacter = arrays[randomArray][randomNumber];

        token.push(randomCharacter);
        counter++;
        
    }
    return token.join("");
}



function generateLetterToken(lenght = 11) {

    let token = [];
    let counter = 1;
    const arrays = [lettersLowercase, lettersUppercase];
    while(counter <= lenght) {
        
        const randomArray = Math.floor(Math.random() * arrays.length) + 0;
        const randomNumber = Math.floor(Math.random() * arrays[randomArray].length) + 0;

        const randomCharacter = arrays[randomArray][randomNumber];

        token.push(randomCharacter);
        counter++;
        
    }
    return token.join("");
}



function generateLowercaseToken(lenght = 11) {

    let token = [];
    let counter = 1;
    const arrays = [lettersLowercase];
    while(counter <= lenght) {
        
        const randomArray = Math.floor(Math.random() * arrays.length) + 0;
        const randomNumber = Math.floor(Math.random() * arrays[randomArray].length) + 0;

        const randomCharacter = arrays[randomArray][randomNumber];

        token.push(randomCharacter);
        counter++;
        
    }
    return token.join("");
}



function generateUppercaseToken(lenght = 11) {

    let token = [];
    let counter = 1;
    const arrays = [lettersUppercase];
    while(counter <= lenght) {
        
        const randomArray = Math.floor(Math.random() * arrays.length) + 0;
        const randomNumber = Math.floor(Math.random() * arrays[randomArray].length) + 0;

        const randomCharacter = arrays[randomArray][randomNumber];

        token.push(randomCharacter);
        counter++;
        
    }
    return token.join("");
}

module.exports = { generateLetterToken, generateLowercaseToken, generateNumberToken, generateToken, generateUppercaseToken }