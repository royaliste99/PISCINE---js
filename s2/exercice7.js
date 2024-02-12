// Exercice 7: Vérifier si un mot est un palindrome

var x="lola";
function palindrome() {
    var x2 = x.split('').reverse().join('');
    if (x2==x) {
        console.log("palindrome");
    }else{

        console.log("pas palindrome");
    }
}
palindrome()