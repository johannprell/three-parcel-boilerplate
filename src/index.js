import * as THREE from 'three'

let scene
let camera
let renderer
let cube

init()

function init() {
  // Create scene
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  var geometry = new THREE.BoxGeometry(1, 1, 1)
  var material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  camera.position.z = 5

  // Adjust rendering on window resize
  window.addEventListener( 'resize', onWindowResize, false )

  // Start update loop
  update()
}

function update() {
  requestAnimationFrame(update)
  renderer.render(scene, camera)
  // Cube animation as example. Replace with array of update functions or similar.
  animateCube()
}

function animateCube() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize( window.innerWidth, window.innerHeight )
}