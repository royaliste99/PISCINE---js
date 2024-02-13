// Exercice 2: Regrouper des éléments d'un tableau par propriété
require("./librairie-core-js/packages/core-js/actual/array/group-by");
require("./librairie-core-js/packages/core-js/actual/array/group-by-to-map");

//require("core-js/actual/array/group-by-to-map");
//require("core-js/actual/array/group-by");

const products = [
    { nom: "asperge", type: "légume"},
    { nom: "banane", type: "fruit"},
    { nom: "agneau", type: "viande"},
    { nom: "cerise", type: "fruit",},
    { nom: "poisson", type: "viande"},
];

const groupByCategorie = products.groupBy((product) => {
  return product.type;
});

const groupByCategorieMap = products.groupByToMap((product) => {
  return product.type;
});

console.log(groupByCategorie);
console.log(groupByCategorieMap);