
// The isLGSeven function calculates the given input number and checks condition . At first, it subtracts 7 from the input number . Then checks if the difference is less than 7 or not.


function isLGSeven (inputNumber){

    const inputKind = typeof(inputNumber);
    if (inputKind!=='number'){
        return "Input should be a number"
    }
    const calculation = inputNumber-7;
    if (calculation<7){
        return inputNumber;
    }

    else{
        const multi = inputNumber*2;
        return multi;
    }

}

const inputfromUser = 15;
const functionOutput = isLGSeven(inputfromUser);
console.log (functionOutput);