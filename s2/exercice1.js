// Exercice 1: Somme des éléments d'un tableau

const tab = [1, 2, 3, 4];

const base = 0;
const addi = tab.reduce(
  (accumule, courantManipuler) => accumule + courantManipuler,
  base,
);

console.log(addi);
