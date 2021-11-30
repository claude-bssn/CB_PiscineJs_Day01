function runLengthEncoding(string) {
    let compteur = 0;
    let char = string[0];
    let encoded = "";

        for(i = 0;i <= string.length;i++){ 
            if(string[i] == char && compteur<9){
                compteur++;
            }else{
                encoded += compteur + char;
                compteur = 1;
                char = string[i];
                }
            }
    return encoded;
}
    // Merci de ne pas effacer la ligne en dessous.
    exports.runLengthEncoding = runLengthEncoding;