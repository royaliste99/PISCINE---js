// Exercice 8: Fusionner deux tableaux et supprimer les doublons

var tabA = ['Java', 'JavaScript'];
var tabB = ['Css', 'PHP', 'Java'];
var tabC;

tabC = tabA.concat(tabB);
function supprimerDoublon(tabA, tabB) {
  var hash = {};
  var x;
  
  for (x = 0; x < tabA.length; x++) {
    hash[tabA[x]] = true;
  }
  for (x = 0; x < tabB.length; x++) {
    hash[tabB[x]] = true;
  }
  return Object.keys(hash);
}

console.log(supprimerDoublon(tabA, tabB) );