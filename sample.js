// import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// const loader = new GLTFLoader()
// let cube
// loader.load('https://testenv.ro/files/cub.gltf', (gltfScene) => {
//   cube = gltfScene.scene
// })

const scene = new THREE.Scene();
const camera = new THREE.Camera();
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ArToolkitSource = new THREEx.ArToolkitSource({
  sourceType: "webcam",
})


// Create a raycaster and a mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Listen for click events on the renderer dom element
renderer.domElement.addEventListener('click', onClick, false);

function onClick(event) {
  // Calculate mouse position
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  // Cast a ray from the camera to the mouse position
  raycaster.setFromCamera(mouse, camera);

  // Find all intersected objects
  const intersects = raycaster.intersectObjects(scene.children);

  // Check if any of the intersected objects is the cube
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object === cube) {
      window.open('https://bluegrassthc.com/', '_blank');
      // Cube was clicked
      console.log('Cube clicked!');
    }
  }
}


ArToolkitSource.init(function() {
  setTimeout(() => {
    ArToolkitSource.onResizeElement()
    ArToolkitSource.copyElementSizeTo(renderer.domElement)
  }, 2000)
})

const ArToolkitContext = new THREEx.ArToolkitContext({
  cameraParametersUrl: '/camera_para.dat',
  detectionMode: 'color_and_matrix',
})

ArToolkitContext.init(function(){
  camera.projectionMatrix.copy(ArToolkitContext.getProjectionMatrix())
})

const ArMarkerControls = new THREEx.ArMarkerControls(ArToolkitContext, camera, {
  type: 'pattern',
  patternUrl: '/pattern.patt',
  changeMatrixMode: 'cameraTransformMatrix'
})

scene.visible = false

const geometry = new THREE.CubeGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial( {
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide
} );
const cube = new THREE.Mesh( geometry, material );
// setTimeout(() => {
//   cube.position.y = geometry.parameters.height / 2
  scene.add(cube);
// },2000)

function animate() {
  requestAnimationFrame( animate );

  ArToolkitContext.update(ArToolkitSource.domElement)
  scene.visible = camera.visible

  renderer.render( scene, camera );
}

animate();