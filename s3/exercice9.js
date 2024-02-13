// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
const x = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 30, 49, 29, 10, 13];

console.log(array1.every(x));
console.log(array2.every(x));