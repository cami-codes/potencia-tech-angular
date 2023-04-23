// ====================================================== //
// ====================== OBJETOS: ====================== //
// ====================================================== //
//  Um objeto a gente declara com chaves e dentro temos uma coleção de chave e valor.  //

// const pessoa = {
//     nome: 'Camila',
//     idade: 22,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
//     }
// }

// adicionando
// pessoa.altura = 1.70
// pessoa.sobrenome = 'Martins'

// removendo
// delete camila.nome

// ~~~~~~~~ reatribuindo a função ~~~~~~~~ //
// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`)
// }

// pessoa.descrever()

// ~~~~~~~~~~ buscar pelo índice ~~~~~~~~~ //
// const atributo = 'idade'

// console.log(pessoa[atributo])

// console.log(pessoa['sobrenome'])

// ~~~~~~~~~~~~~~ reatribuir um valor ~~~~~~~~~~~~~ //

// dinâmico
// pessoa['nome'] = 'teste'
// console.log(pessoa) 

// acesso direto
// pessoa.nome = 'teste 2'
// console.log(pessoa)

// ====================================================== //
// ======================= CLASSES ====================== //
// ====================================================== //
// A classe é a definição do que deve ser tal objeto e o objeto é a instância é a ocorrência daquele objeto
class Pessoa {
    nome;
    idade; 
    anoDeNascimento;

    // obriga um valor a ser instanciado
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

// No objeto temos uma pessoa específica
// const pessoa = {
//     nome: 'Camila',
//     idade: 22,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
//     }
// }

// const camila = new Pessoa('Camila', 22)

// camila.descrever()

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const camila = new Pessoa('Camila', 32)
const renan = new Pessoa('Renan', 30)

compararPessoas(camila, renan) 