function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()

    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (ano.value.length == 0 || ano.value > anoatual){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = anoatual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'homemcrianca.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'homemidoso.jpg')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'mulhercrianca.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}