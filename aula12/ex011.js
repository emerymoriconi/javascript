var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.') // no NodeJs o comando de escrita é console.log() e no navegador é window.document.write()
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}
