// ARRAYS NO JAVASCRIPT SÃO HETEROGÊNEOS
let num = [5, 8, 2, 9, 3]

num.push(0)
let tam = num.length

console.log(num)

let sorted = num.sort()

console.log(tam)
console.log(sorted)


// FOR NORMAL

for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

// FOR IN
// só funciona pra Arrays

for (let pos in num){
    console.log(num[pos])
}

// BUSCAR VALORES DENTRO DE UM VETOR
// devolve o índice daquele valor
// quando não encontra, devolve -1

let oito = num.indexOf(8)
console.log(oito)