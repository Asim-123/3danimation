const box = document.getElementById('box');

function onMouseMove(event) {
  const x = (event.clientX / window.innerWidth) * 360;
  const y = (event.clientY / window.innerHeight) * 360;
  box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
}

document.addEventListener('mousemove', onMouseMove);
