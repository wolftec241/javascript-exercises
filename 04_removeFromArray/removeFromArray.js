const removeFromArray = function(arr, ...rmItem) {
    const newArr = []
    for(let item of arr){
        if(!(rmItem.includes(item))){
            newArr.push(item);
        }
     }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
