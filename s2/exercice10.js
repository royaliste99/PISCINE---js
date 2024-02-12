// Exercice 10: Convertir une chaîne de caractères en camelCase

var texte = 'chaine de caractères !';

function strCamelCase(a) {
    var b = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^A-Za-z0-9]/g);
    b.forEach(function(c, d) {
      b[d] = c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
    });
    console.log(b.join(''));
  }
strCamelCase(texte);