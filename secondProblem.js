// // This evenOdd function takes any string input from the user and finds out if the number of characters is even or odd. 

// function evenOdd (inputString){
 

//     const typeOfInput = typeof(inputString);

//     if (typeOfInput !=='string'){
//         return "Input should be a string"
//     }

//     if(inputString.length %2===0){
//         return 'even';
//     }

//     else{
//         return 'odd';
//     }


   



// }

// const userInput = 'Taniasi';
// const getOutput = evenOdd(userInput);
// console.log (getOutput);


function evenOdd (inputString){
 

    const typeOfInput = typeof(inputString);

    if (typeOfInput !=='string'){
        return "Input should be a string"
    }

    if(inputString.length %2===0){
        return 'even';
    }

    else{
        return 'odd';
    }


   



}

const userInput = 'Taniasi';
const getOutput = evenOdd(userInput);
console.log (getOutput);
