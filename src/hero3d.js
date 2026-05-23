import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls, model;
let isZooming = false;
let zoomTarget = new THREE.Vector3();

export function init3D() {
  const canvas = document.querySelector('#hero-canvas');
  if (!canvas) return;

  // Scene setup
  scene = new THREE.Scene();
  // We don't set background color so it is transparent or match CSS background
  scene.background = new THREE.Color(0x050505);
  scene.fog = new THREE.Fog(0x050505, 5, 15);

  // Camera setup
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1, 5);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x6effc0, 2);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 1);
  fillLight.position.set(-5, 3, -5);
  scene.add(fillLight);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = false;
  controls.minDistance = 2;
  controls.maxDistance = 8;
  
  // Load Model or Placeholder
  const loader = new GLTFLoader();
  
  // TO USER: PLACE YOUR .glb FILE IN public/models/ AND UPDATE THIS PATH
  const modelPath = '/models/zapatilla.glb'; 

  // For testing, create a placeholder mesh until the real model loads
  const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x222222, 
    roughness: 0.2, 
    metalness: 0.8,
    wireframe: true 
  });
  model = new THREE.Mesh(geometry, material);
  scene.add(model);

  // Attempt to load real model (will fail gracefully if not found and keep placeholder)
  loader.load(
    modelPath,
    (gltf) => {
      scene.remove(model); // remove placeholder
      model = gltf.scene;
      
      // Center and scale model if needed
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.x += (model.position.x - center.x);
      model.position.y += (model.position.y - center.y);
      model.position.z += (model.position.z - center.z);
      
      scene.add(model);
    },
    undefined,
    (error) => {
      console.log('No custom model found at /models/zapatilla.glb. Using placeholder.');
    }
  );

  // Resize handler
  window.addEventListener('resize', onWindowResize);

  // Start loop
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  if (controls && !isZooming) {
    controls.update(); // only update controls if not zooming
  }

  // Smooth rotation for the placeholder/model if no user interaction
  if (model && !isZooming && !controls.state) {
     model.rotation.y += 0.005;
  }

  // Lerp camera zoom transition
  if (isZooming) {
    // Lerp camera position towards the model center
    camera.position.lerp(zoomTarget, 0.05);
    // Optional: make the camera look exactly at the center
    camera.lookAt(0, 0, 0);
  }

  renderer.render(scene, camera);
}

export function triggerZoomTransition() {
  return new Promise((resolve) => {
    isZooming = true;
    if (controls) {
      controls.enabled = false; // Disable user interaction during transition
    }
    
    // Set target slightly in front of the model
    zoomTarget.set(0, 0, 0.5);

    // Wait 1 second for the lerp animation to play out, then resolve
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
