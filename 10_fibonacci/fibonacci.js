const fibonacci = function(index) {
    if(index < 0) return "OOPS"
    let previous = 0;
    let newOne = 1;
    let temp = 0;
    for(let i=1; i<index; i++){
        temp = newOne;
        newOne += previous;
        previous = temp;
    }
    return newOne;
};

// Do not edit below this line
module.exports = fibonacci;
