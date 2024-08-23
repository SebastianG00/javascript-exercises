const removeFromArray = function(arr, ...numbers) {
    
    for (let x of numbers) {
        for (let i = 0 ; i < arr.length; i++) {
            if (x === arr[i]) {
                arr.splice(i,1);
                i--; // since we remove an element, the index shift , so we need to correct it.
                
            }
            
    
    
        }

    }
     

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
