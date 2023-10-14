function carregar(){
    let msg = window.document.getElementById('msg');
    let img =window.document.getElementById('imagem');
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    
    if (hora>= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'

    }else if (hora>=12 && hora < 18 ) {
        img.src = 'tarde.png'
        document.body.style.background = "#b9846f"
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }   





}