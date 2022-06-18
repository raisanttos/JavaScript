function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()//data atual
    var hora = data.getHours()//Hora atual
    var min = data.getMinutes()//Minutos (chamei minha variavel data e coloquei data.getMinutes)
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if(hora >= 0 && hora <= 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background ="#fee157"
    } else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background ="#ffbb8a"
    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background ="#274d64"
    }
}
