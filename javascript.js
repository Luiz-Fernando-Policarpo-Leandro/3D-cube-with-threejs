import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const inputCubeColor = document.querySelector("#cube-color-input");
const inputCubeColorParty = document.querySelector("#party-Active");


// Configuração da Cena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

// Câmera em Perspectiva
// âmetros: FOV, Aspect Ratio, Near, Far
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1,2,1);


// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// chão
const size = 10;
const divisions = 10;
const gridHelper = new THREE.GridHelper( size, divisions);
scene.add( gridHelper );

// Criação do Cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const cube = new THREE.Mesh(geometry, material);
const positionInitial = (geometry.parameters.width)/2
cube.position.set(0,positionInitial,0);
scene.add(cube);

// Iluminação (necessária para MeshStandardMaterial)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 2);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Controles da Câmera (Mouse: Rotação, Zoom e Pan)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // suavização do movimento

// Ajuste de Redimensionamento da Janela
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});





// Loop de Animação
function animate() {
    requestAnimationFrame(animate);

    if (inputCubeColorParty.checked) {
        const elapsed = (Date.now() - partyStartTime) * .003;
        const hue = (partyStartHue + elapsed) % 1;
        

        cube.material.color.setHSL(hue, 1, 0.5);
        inputCubeColor.value = `#${cube.material.color.getHexString()}`;
    }

    controls.update();
    renderer.render(scene, camera);
}

animate();



inputCubeColor.addEventListener('input', () => {
    if (!inputCubeColorParty.checked){
         cube.material.color.set(inputCubeColor.value);
    }
});

let partyStartHue = 0;
let partyStartTime = 0;

inputCubeColorParty.addEventListener('change', () => {
    if (inputCubeColorParty.checked) {
        const hsl = {};
        cube.material.color.getHSL(hsl);

        partyStartHue = hsl.h;
        partyStartTime = Date.now();
    }
});