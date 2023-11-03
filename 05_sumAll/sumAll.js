const sumAll = function(firstNum, lastNum) {
    //check if parameters are numbers or not abd if they negative
    if( !(Number.isInteger(firstNum) && Number.isInteger(lastNum)))
        return "ERROR";
    if (firstNum < 0 || lastNum < 0) return "ERROR";

    let sum;
    //check if firstNum bigger then lastNum and switch between them if it true
    if(firstNum > lastNum){
        sum = lastNum;
        lastNum = firstNum;
        firstNum = sum;
    }

    sum = 0
    for(let i=firstNum; i <= lastNum; i++)
        sum += i;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
