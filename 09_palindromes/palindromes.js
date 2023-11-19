const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    reverse_string = str.split("").reverse().join("");
    return str == reverse_string;
};

// Do not edit below this line
module.exports = palindromes;
