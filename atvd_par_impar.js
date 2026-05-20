// Sem Função.
 let numero = 5

 if (numero % 2 == 0)
     console.log ("Par")
 else
     console.log ("Impar")



// Função com retorno

 function verificar (numero) {
     if (numero % 2 == 0)
         ressultado = "Par"
    else
         ressultado = "Impar"
   return ressultado
 }

 resposta = verificar (50)
 console.log ("Resultado: ", resposta)






// Função sem retorno

 function verificar (numero) {
     if (numero % 2 == 0)
        console.log ("Par")
     else
         console.log ("Impar")
}

verificar (5)
