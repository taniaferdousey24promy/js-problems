// -------------------------------------------------------------------------------------------------------------
//Problem1:: mindGame functions takes any input number from users and calculates the input by multiplying with 3. Then add 10 with their product .  After that, this function divides the summation result by 2. Lastly, subtracts 5 from the whole result.


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

//---------------------------------------------------------------------------------------------------------------------

//Problem2:: This evenOdd function takes any string input from the user and finds out if the number of characters is even or odd. 




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
//---------------------------------------------------------------------------------------------------------------------
// Problem3:: The isLGSeven function calculates the given input number and checks condition . At first, it subtracts 7 from the input number . Then checks if the difference is less than 7 or not.


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

const inputfromUser = 6;
const functionOutput = isLGSeven(inputfromUser);
console.log (functionOutput);
//---------------------------------------------------------------------------------------------------------------------
// Problem4:: The function findingBadData takes an array as input data from few people and finds the total number of bad data (or negative datas) is given by some people.

function findingBadData(inputArray){

    const typeOfInput = Array.isArray(inputArray);
    if (typeOfInput !==true){
        return "Input should be an array"
    }

    
    
    let count = 0;

    for(let i =0; i<inputArray.length; i ++){
        if (inputArray[i]<0){
            count = count +1;
        }

    
    }
    return count;
        
}

const input = [ -4, -9, -5, -33, -55 ];
const outputFromFunction = findingBadData(input);
console.log (outputFromFunction);
//---------------------------------------------------------------------------------------------------------------------
//Problem5:: The function gemsToDiamond takes input number from my three friends of their gem numbers and converts them to diamond numbers by multipling them with  21, 32 and 43 accordingly.

function gemsToDiamond(inputNumber1, inputNumber2, inputNumber3){

    const typeOfInput1 = typeof(inputNumber1);
    const typeOfInput2 = typeof(inputNumber2);
    const typeOfInput3 = typeof(inputNumber3);


    if (typeOfInput1!=='number'|| typeOfInput2!=='number' || typeOfInput3!=='number'){
        return "All input should be numbers";
    }

    

    const firstFrndDiamond = inputNumber1*21;
    const secondFrndDiamond = inputNumber2*32;
    const thirdFrndDiamond = inputNumber3*43;

    let total = firstFrndDiamond+secondFrndDiamond+thirdFrndDiamond;

    const condition = 1000*2;
    if(total >= condition){

        total = total -2000;
        return total;


    }

    else{
        return total;
    }

}

const firstFrndGem =100 ;
const secondFrndGem =5 ;
const thirdFrndGem =1 ;




const outputsFromFunction = gemsToDiamond(firstFrndGem, secondFrndGem,thirdFrndGem);
console.log (outputsFromFunction);