const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeros = gets();

    if (numeros > maiorValor) {
        maiorValor = numeros;
    }
}

print(maiorValor);

/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

