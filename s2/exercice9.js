// Exercice 9: Calculer l'âge à partir d'une date de naissance

const annive = new Date('1994-02-13T00:20:18');

const anniveAnnee= annive.getFullYear()
const anniveMois=annive.getMonth()
const anniveJours=annive.getDate()

const aujourdhui = new Date();

const aujourdhuiAnnee= aujourdhui.getFullYear()
const aujourdhuimois=aujourdhui.getMonth()
const aujourdhuijours=aujourdhui.getDate()

const annee = aujourdhuiAnnee - anniveAnnee;

if (anniveMois>=aujourdhuimois) {
    if (anniveJours>aujourdhuijours) {
        console.log(annee-1+"ok");
    }else{
        console.log(annee+"ok");
    }
} else{
    console.log(annee+"ok");
}




// Expected output: 1969