// Exercice 10: Exécuter des promesses en série

function faireQqcALAncienne(successCallback, failureCallback) {
    if (Math.random() > 0.5) {
      successCallback("Réussite");
    } else {
      failureCallback("Échec");
    }
  }
  
  function successCallback(résultat) {
    console.log("L'opération a réussi avec le message : " + résultat);
  }
  
  function failureCallback(erreur) {
    console.error("L'opération a échoué avec le message : " + erreur);
  }
  
  faireQqcALAncienne(successCallback, failureCallback);