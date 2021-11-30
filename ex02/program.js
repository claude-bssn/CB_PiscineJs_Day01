function pocketMoney(coins){
    const result = [];
    let max = 1 << coins.length;
    for (let i = 0; i < max; i++) {
        temp = [];
        for (let j = 0; j < coins.length; j++) {
             if (i & 1 << j){
                temp.push(coins[j]);
            };    
        }
        for (let num = 1; num < coins.length; num++) {
            if(temp.length === num){
                result.push(temp.reduce(function (a, b) { return a + b; }));
            };
        }
    };
    result.sort((a ,b)=> a - b);
    result.push(coins.reduce((a, b)=> a + b, 0));
    let trimed_result= result.filter((c, index)=> result.indexOf(c)===index);
    let last_value = trimed_result[trimed_result.length -1];
    
    for (let l = 1; l < last_value +1; l++) {
                if(trimed_result.find(el => el == l ) == undefined){  
                    return l;
                }
                
            }
    return last_value +1;
    
}

    // Merci de ne pas effacer la ligne en dessous.
    exports.pocketMoney =  pocketMoney;