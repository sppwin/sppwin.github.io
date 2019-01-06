let frame = 1
setInterval(function () {
  if (frame === 3) {
    frame = 1
  } else {
    frame += 1
  }
  document.querySelector('.frame').style.display = 'none'
  document.querySelector('.frame' + frame).style.display = 'block'
}, 500)
