// Exercice 6: Trier un tableau de nombres

var nombres = [4, 20, 51, 14, 3];
nombres.sort(function (a, b) {
  return a - b;
});
console.log(nombres);