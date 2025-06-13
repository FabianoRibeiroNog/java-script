function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imgs/manha.png'
        document.body.style.background = '#f3e6ba'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#e7e8ea'
    } else {
        img.src = 'imgs/noite.png'
        document. body.style.background = '#515154'
    }
}
