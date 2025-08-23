let vetor = []

let numero = document.getElementById('num')
function adicionar(num){
    if (num < 1 || num > 100 || vetor.indexOf(num) != -1){
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        var res = document.getElementById('lista')
        res.innerHTML += `<option>Valor ${num} adicionado.</option><br>`
        vetor.push(num)
    }
    // automatizar a caixinha de receber numero, apagando e colocando o cursor la dnv
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if (vetor.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        vetor.sort()
        let soma = 0
        for(let pos in vetor){
            soma += Number(vetor[pos])
        }
        let media = soma / vetor.length
        var res = document.getElementById('res')
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p><p>O maior valor informado foi ${vetor[vetor.length-1]}.</p><p>O menor valor informado foi ${vetor[0]}.</p><p>Somando todos os valores, temos ${soma}.</p><p>A média dos valores digitados é ${media}.</p>`
    }
}