function tabTriCarre(array){
    let result = [];
    array.forEach(element => {
        result.push(element * element);
    }); 
    result.sort(function(a,b){
        return a - b;
    })
    return result;
}
    // Merci de ne pas effacer la ligne en dessous.
    exports.tabTriCarre =  tabTriCarre;