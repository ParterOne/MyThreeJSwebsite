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
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

const mouse = {
	x: undefined,
	y: undefined
}

    document.addEventListener( 'mousemove', onMouseMove, false );


function onMouseMove( event ) {
    var mouseX = window.innerWidth / 2 - event.clientX;
    var mouseY = window.innerHeight / 2 - event.clientY;
    torus.rotation.y = Math.PI*2*mouseX/window.innerWidth;
    torus.rotation.x = -Math.PI*2*mouseY/window.innerHeight;
    torus.updateMatrix();
}   

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate()

