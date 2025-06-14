function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    if (hora >= 0 && hora <= 6) {
        //BOA MADRUGADA
        msg.innerHTML = `Agora são ${hora} horas da madrugada.`
        img.src = 'imgs/madrugada.png'
        document.body.style.background = '#292c5a'
    } else if (hora > 6 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        img.src = 'imgs/manha.png'
        document.body.style.background = '#885d4c'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#e7e8ea'
    } else if (hora >= 18 && hora <= 24) {
        msg.innerHTML = `Agora são ${hora} horas da noite`
        img.src = 'imgs/noite.png'
        document.body.style.background = '#515154'
    } else {
        msg.innerHTML = `[ERRO] está hora está incorreta, tente novamente!!!`
    }
}
