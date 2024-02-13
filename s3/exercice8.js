// Exercice 8: Trier un tableau d'objets par plusieurs propriétés
var tableauObjets = [
    {nom:'Mélanie', age: 29},
    {nom:'Henrique', age: 35},
    {nom:'Stan', age: 10},
    {nom:'Mac', age: 2},
    {nom:'Anna', age: 35}
  ];

  tableauObjets.sort(function compare(a, b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age )
       return 1;
    else {
    if (a.nom < b.nom)
       return -1;
    if (a.nom > b.nom )
       return 1;
    }
    return 0;
  });
  
  console.log(tableauObjets);