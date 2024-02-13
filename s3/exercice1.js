// Exercice 1: Supprimer les éléments falsy d'un tableau

var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3 , "con"];
 
var filtre = arr.filter(function(x) {

   return x !== false && x!== undefined && x!== null && x!== '';
});
 
console.log(filtre);