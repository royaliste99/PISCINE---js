// Exercice 3: Filtrer les nombres pairs d'un tableau

let nomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pair = nomb.filter(function (nomb) {
  return nomb % 2 === 0
})
console.log(pair)