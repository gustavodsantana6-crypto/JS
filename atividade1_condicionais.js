// Estrutura condicional.

const idade = 10;

if (idade < 16) {
    console.log("Menoridade, não votará.");
} else if (idade >= 16 && idade <= 17) {
    console.log("Menoridade, voto opcional.");
} else if (idade >= 18 && idade < 65) { // Ajustado aqui
    console.log("Maioridade, voto obrigatório.");
} else if (idade >= 65) {
    console.log("Maioridade, voto opcional.");
} else {
    console.log("Idade inválida.");
}