// Set up scene, camera, renderer
const canvas = document.getElementById('three-hero');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / 300,  // hero section height = 300px
  0.1,
  1000
);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, 300, false);

// Just render the empty scene (no cube)
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / 300;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, 300);
});
