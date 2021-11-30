function firstDuplicateValue(array){
    let ref = {};
for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0){
        return "Some values are negatives, please fix your array, Bisous!";
    }
    if (array[i] in ref){
        return array[i];
    }
    ref[array[i]] = i;
}
     return -1;
}

// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue =  firstDuplicateValue;
