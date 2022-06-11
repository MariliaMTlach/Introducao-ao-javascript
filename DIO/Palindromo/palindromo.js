//solução 1
function verificaPalindromo(string) {
    if(!string) return;
    console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

//solução 2

function verificaPalindromo2 (string) {
    if(!string) return;
    if(!string.length) return;

    for( var i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }
}
verificaPalindromo2('asa');