import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function initSuccess3D() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize pixel ratio
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  // Accent Cadence Green Light
  const pointLight = new THREE.PointLight(0x6EFFC0, 5, 20);
  pointLight.position.set(-3, 2, 3);
  scene.add(pointLight);

  const spotLight = new THREE.SpotLight(0x6EFFC0, 5);
  spotLight.position.set(0, -5, 5);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.5;
  scene.add(spotLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2.0;

  // Load Model
  const loader = new GLTFLoader();
  loader.load('/models/zapatilla.glb', (gltf) => {
    const model = gltf.scene;
    
    // Center the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.x += (model.position.x - center.x);
    model.position.y += (model.position.y - center.y);
    model.position.z += (model.position.z - center.z);
    
    // Adjust scale slightly for impact
    model.scale.set(1.2, 1.2, 1.2);

    scene.add(model);
  }, undefined, (error) => {
    console.error('An error happened loading the 3D model:', error);
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();
}
