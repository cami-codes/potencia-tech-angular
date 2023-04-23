/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

*/

function calcularMedia(nota1, nota2, nota3) {
    return nota1 + nota2 + nota3 / 3
}

function classificarMedia(media) {
    if (media < 5) {
        return 'Reprovado.'
    } else if (media >= 5 && media <= 7 ) {
        return 'Recuperação.'
    } else {
        return 'Aprovado.'
    }
}

function main() {
    const nota1 = 1
    const nota2 = 1
    const nota3 = 3

    const media = calcularMedia(nota1, nota2, nota3)
    console.log("Classificação: " + classificarMedia(media))
}

main()