// The function findingBadData takes an array as input data from few people and finds the total number of bad data (or negative datas) is given by some people.

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