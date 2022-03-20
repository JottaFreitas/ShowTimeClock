function carregar() {
  var img = window.document.getElementById('imagem')
  var msg = window.document.getElementById('msg')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  var seg = data.getSeconds()
  var time = hora + min + seg

  if (hora < 10) hora = '0' + hora
  if (min < 10) min = '0' + min
  if (seg < 10) seg = '0' + seg

  msg.innerHTML = `Agora são ${hora}:${min}:${seg}`

  if (hora >= 05 && hora < 12) {
    //console.log('if1') debugger para o console
    img.src = 'manha.png'
    document.body.style.background = '#ffb06f9b'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#6057da'
  } else {
    document.body.style.background = 'rgb(15, 15, 27)'
    img.src = 'noite.png'
  }
  setInterval(carregar, 1000) //função sendo carregada a cada 1000mili segundos
}
