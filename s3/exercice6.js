// Exercice 6: Filtrer un tableau d'objets par une plage de dates

let tableau = [
    { nom: "PC 1", date: new Date("2015-11-15") },
    { nom: "PC 5", date: new Date("2012-02-10") },
    { nom: "PC 3", date: new Date("2024-03-15") },
    { nom: "PC 4", date: new Date("2013-08-24") }
]
  
  console.log(tableau.sort());

  tableau.sort((a, b) => a.date - b.date);
  console.log(tableau);