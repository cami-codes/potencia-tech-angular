function escreverNome(nome) {
    return 'Seu nome é ' + nome
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Camila') + ' e você é maior de idade');
    } else {
        console.log(escreverNome('Camila') + ' e você é menor de idade');
    }
}

verificarIdade(22);