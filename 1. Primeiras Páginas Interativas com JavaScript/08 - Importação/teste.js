const valorHamburguer = 8.00;
const quantidadeHamburguer = 1;
const valorBebida = 4.00;
const quantidadeBebida = 4;
const valorPago = 50.00;

const valorTotalHamburguer = (valorHamburguer * quantidadeHamburguer);
const valorTotalBebida = (valorBebida * quantidadeBebida);
const valorTotal = (valorTotalHamburguer + valorTotalBebida).toFixed(2);
const troco = (valorPago - valorTotal).toFixed(2);

console.log(`O preço final do pedido é de R$ ${valorTotal}. Seu troco é de R$ ${troco}.`);