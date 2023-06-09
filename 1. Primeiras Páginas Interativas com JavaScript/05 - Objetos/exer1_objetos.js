/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoCombustivelPorKm;

    constructor(marca, cor, gastoCombustivelPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoCombustivelPorKm = gastoCombustivelPorKm
    }

    calcularViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoCombustivelPorKm * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12)
const viagem = uno.calcularViagem(70, 5)
console.log(viagem)

