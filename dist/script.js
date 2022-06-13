import * as THREE from "https://cdn.skypack.dev/three@0.141.0";

const raycaster = new THREE.Raycaster()

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: false
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347,side: THREE.DoubleSide, wireframe: true});
const torusA = new THREE.Mesh(geometry, material);

scene.add(torusA)

const mouse = {
	x: undefined,
	y: undefined
}

function animate(){
  requestAnimationFrame(animate);
  torusA.rotation.x += 0.01;
  torusA.rotation.y += 0.005;
  torusA.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate()