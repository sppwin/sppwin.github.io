let frame = 1
setInterval(function () {
  if (frame === 3) {
    frame = 1
  } else {
    frame += 1
  }
  console.log(frame)
  document.querySelectorAll('.frame').style.display = 'none'
  document.querySelector('.frame' + frame).style.display = 'block'
}, 500)
