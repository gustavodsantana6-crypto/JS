const VETORES = [6, 7, 8, 9, 10]
console.log("Exibindo todos os elementos")
console.log(VETORES)

if (VETORES% 2 == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
VETORES.forEach((numero) => {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é impar`)
    }
})