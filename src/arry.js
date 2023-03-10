const redeSociais = ["Facebook", "Instagram", "Twitter"]

for (let item in redeSociais){
    console.log(`FORMA PYTHON ${redeSociais[item]}`)
}

console.log("")

for (let i = 0; i < redeSociais.length; i++){
    console.log(redeSociais[i])
}

console.log("\nfuncao\n")
redeSociais.forEach(function (item) {
    console.log(item)
}) 
console.log("")

// ------------------------------------------------------------------------------------------------------------- //

const alunos = ["maria", "joao", "vivi", "rafael"]

const alunosDict = alunos.map(function(item){
    item = {
        nome: item,
        curso: "matemática"
    }
    return item
})

console.log(alunosDict)

console.log("")

// ------------------------------------------------------------------------------------------------------------- //

const numeros = [1, 2, 3, 4]
const numerosDobro = []

numeros.map(function (numero){
    numerosDobro.push(numero*numero) // append
})

console.log(numerosDobro)

const num = numeros.map(function (numero){
    return numero*2
})

console.log(num)


// find
// findIndex
// filter

const verificaTodos = alunosDict.every(function(item){
    return item.curso === "matemática"
})

// some



//Before Arrow:
hello = function() {
    return "Hello World!";
}
//With Arrow Function:
hello = () => {
    return "Hello World!";
}












// function Aluno(nome, nota){
//     this.Nome = nome || "unknown";
//     this.Nota = nota || 0;
// }

// var std = new Aluno("Alice", 9.3);

// let alunos = [
//     {
//         "nome": "Alice",
//         "nota": "9.3",
//     },
//     {
//         "nome": "Bruno",
//         "nota": "8.5",
//     },

// ]

// console.log(alunos)
