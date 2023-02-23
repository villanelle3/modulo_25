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