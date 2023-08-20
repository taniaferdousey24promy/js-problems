// // mindGame functions takes any input number from users and calculates the input by multiplying with 3. Then add 10 with their product .  After that, this function divides the summation result by 2. Lastly, subtracts 5 from the whole result.

// function mindGame (inputNumber){

//     const typeOfInput = typeof(inputNumber);
//     if (typeOfInput!=='number'){
//         return "Input should be a number"
//     }
   
   

//     let calculated = inputNumber*3;
//     calculated = calculated +10;
//     calculated = calculated /2;
//     calculated = calculated -5;
    
//     return calculated ;


// }

// const userInput = 'tania';
// const getOutput = mindGame(userInput);
// console.log (getOutput);

function mindGame (acceptInput){

    const inputType = typeof(acceptInput);
    if (inputType!=='number'){
        return "Input should be a number"
    }
   
   

    let calculated = acceptInput*3;
    calculated = calculated +10;
    calculated = calculated /2;
    calculated = calculated -5;
    
    return calculated ;


}

const inputByUser = 5;
const output = mindGame(inputByUser);
console.log (output);

