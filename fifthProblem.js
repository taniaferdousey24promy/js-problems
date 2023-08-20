//The function gemsToDiamond takes input number from my three friends of their gem numbers and converts them to diamond numbers by multipling them with  21, 32 and 43 accordingly.

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