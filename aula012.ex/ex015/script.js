function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('itxtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebehomem230.png') //tentando arrumar aqui
                console.log('Caminha da imagem para homem criança: ', img.getAttribute('src'))
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovemhomem230.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adultohomem230.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosohomem230.png')
            }
        } else if(fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'foto-bebemulher230.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src' , 'foto-jovemmulher230.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src' , 'foto-adultomulher230.png')
            } else {
                //Idoso
                img.setAttribute('src' , 'foto-idosomulher230.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}