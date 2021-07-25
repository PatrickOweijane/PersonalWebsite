// Option 1: Import the entire three.js core library.
import * as THREE from 'three';


const canvasContainer = document.getElementById('canvas-container');
const canvas = document.getElementById('canvas');

canvas.width = canvasContainer.offsetWidth;
canvas.height = canvasContainer.offsetHeight;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});

// renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.width, canvas.height);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
    color: 0xFF6347,
})
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xff0000);
// pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0x670808);


scene.add(pointLight, ambientLight);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff
    });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z)
    scene.add(star)
}

Array(200).fill().forEach(addStar);

function animate() {
    renderer.render(scene, camera);
    torus.rotation.x += 0.01;
    // torus.rotation.y += 0.01;
    // torus.rotation.z += 0.01;


    requestAnimationFrame(animate);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    const width = canvasContainer.offsetWidth;
    const height = canvasContainer.offsetHeight;

    console.log(width);
    console.log(height);

    canvas.width = width;
    canvas.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}

requestAnimationFrame(animate);
