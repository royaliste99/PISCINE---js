// Exercice 3: Créer une fonction de débogage

// function func1(name, oki) {
//   function oki() {
//     const y = 4;
//     return y;
//   }

//   function name() {
//     const x = 3;
//     return x;
//   }
//   function t() {
//     const v = name() + oki();
//     return v;
//   }
//   console.log(t()); 
// }

//func1();

function test() {
    var p="ok";
}
function test2() {
    var p="coucou";
}
 function debogage(f) {
    function debogageMessage(f) {
        console.log("la fonction : " +f+ " a ete appeler");
    }
    debogageMessage(f)
 }
 debogage(test2.name)