"use strict";

var redeSociais = ["Facebook", "Instagram", "Twitter"];
for (var item in redeSociais) {
  console.log("FORMA PYTHON ".concat(redeSociais[item]));
}
console.log("");
for (var i = 0; i < redeSociais.length; i++) {
  console.log(redeSociais[i]);
}
console.log("\nfuncao\n");
redeSociais.forEach(function (item) {
  console.log(item);
});
console.log("");

// ------------------------------------------------------------------------------------------------------------- //

var alunos = ["maria", "joao", "vivi", "rafael"];
var alunosDict = alunos.map(function (item) {
  item = {
    nome: item,
    curso: "matemática"
  };
  return item;
});
console.log(alunosDict);
console.log("");

// ------------------------------------------------------------------------------------------------------------- //

var numeros = [1, 2, 3, 4];
var numerosDobro = [];
numeros.map(function (numero) {
  numerosDobro.push(numero * numero); // append
});

console.log(numerosDobro);
var num = numeros.map(function (numero) {
  return numero * 2;
});
console.log(num);