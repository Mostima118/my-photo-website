const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

function resizeRenderer() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

resizeRenderer();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  resizeRenderer();
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('p, img');

  elements.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.animationDelay = `${index * 0.15}s`;
  });
});
