// Exercice 4: Trouver un élément dans un tableau d'objets

var fruits = ["pomme", "banane", "raisin", "mangue"];

function trouveFruit(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
  });
}

console.log(trouveFruit(fruits, "banane"));