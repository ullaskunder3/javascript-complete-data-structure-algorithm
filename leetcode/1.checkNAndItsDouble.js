var checkIfExist = function(arr) {
    const numSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(numSet.has(num*2)||numSet.has(num/2)){
            return true
        }
        numSet.add(num);
    }
    return false
};

checkIfExist([10, 2, 5, 3])