// AMIGO é um objeto com seus 4 atributos, sendo um deles uma função (MÉTODO)!
// Objeto em JS se declara com {}

let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
