function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotos/manha.jpg'
        //a cor de fundo muda para a cor do código a depender do horário do dia
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = '#B65112'
    } else {
        img.src = 'fotos/noite.jpg'
        document.body.style.background = '#504258'
    }
}
