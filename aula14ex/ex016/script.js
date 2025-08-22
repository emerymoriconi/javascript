function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')

    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(passo.value) == 0){
        res.innerHTML = '<p>Impossível contar!</p>'
    } else {
        res.innerHTML = '<p>Contando:</p>'
        if (inicio.value < fim.value){
            for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)){
                res.innerHTML += `${c}👉`
            }
        } else {
            for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)){
                res.innerHTML += `${c}👉`
            }
        }
        res.innerHTML += '🏴'
    }

}