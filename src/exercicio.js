class Aluno {
    constructor(nome, nota) {
        this.Nome = nome || "unknown";
        this.Nota = nota || 0;
    }
}

const alunos = [
    new Aluno("Alice", 9.3),
    new Aluno("Bruno", 8.5),
    new Aluno("Caio", 5.5),
    new Aluno("Daniela", 5.9),
    new Aluno("Eduardo", 7.3),
]

const Aprovados  = alunos.filter(function(item) {
    if (item.Nota >= 6){
        return item
    }
});
console.log(" ")
console.log(Aprovados)




