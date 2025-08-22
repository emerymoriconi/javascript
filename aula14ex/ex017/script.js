function tabuada(){
    var num1 = document.getElementById('num')
    var res = document.querySelector('select#lista')
    if (num1.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            res.innerHTML += `<option>${num1.value} x ${c} = ${Number(num1.value)*c}</option><br>`
        }
    }
}