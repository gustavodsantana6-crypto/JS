// VETORES EM JAVASCRIPT

const vetorNomes = ["Marta, josé, gustavo"]
console.log("Exibindo todos os elementos:")
console.log(vetorNomes)

console.log("\nExibindo o primeiro elemento: ")
console.log(vetorNomes[0])

console.log("\nAdicionando um elemento no final do vetor: ")
vetorNomes.push("Mariana")
console.log(vetorNomes)

console.log("\nAdicionando um elemento no ínicio do vetor: ")
vetorNomes.unshift("Fabiana")
console.log(vetorNomes)

console.log("\nRemovendo o primeiro elemento do vetor: ")
vetorNomes.shift()
console.log(vetorNomes)

console.log("\nRemovendo o ultimo elemento do vetor: ")
vetorNomes.pop()
console.log(vetorNomes)

console.log("\nLaço de repetição para exibir os elementos do vetor: ")
console.log("Índice: Nome")
vetorNomes.forEach((nome, index) => {
    console.log(`${index}: ${nome}`)
})