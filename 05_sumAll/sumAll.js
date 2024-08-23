const sumAll = function(num1, num2) {
    
    // 3 7 -> 3 + 4 + 5 + 6 + 7 = 25
    // summation7 = 28
    //sum3 = 6
    //sum7 - sum3 + num1

    // 9 15 -> 9 + 10 + 11 + 12 + 13 + 14 + 15 = 84
    //summation15 = 120
    // sum 9 = 45 
    let result = 0;
    let sum1 = (num1*(num1+1))/2;
    let sum2 = (num2*(num2+1))/2;
    
    if (num1 < 0 ||   typeof(num1) != 'number' ||!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 < num2) {
        result = sum2 - sum1 + num1;
        
    } else {
        result = sum1 - sum2 + num2;

    }

    return result;

    


};

// Do not edit below this line
module.exports = sumAll;
