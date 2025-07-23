<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

  // @ts-ignore - JSON data
  import countries from "./globe-data-min.json";
  // @ts-ignore
  import travelHistory from "./my-flights.json";
  // @ts-ignore
  import airportHistory from "./my-airports.json";

  let container: HTMLDivElement;

  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let controls: OrbitControls;
  let globe: any;

  let mouseX = 0;
  let mouseY = 0;
  let windowHalfX = 0;
  let windowHalfY = 0;

  // Using onMount to load the 3D library after initial page load
  onMount(async () => {
    const [THREE, ThreeGlobe] = await Promise.all([
      import("three"),
      import("three-globe").then((module) => module.default),
    ]);

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    init();
    initGlobe(ThreeGlobe);

    onWindowResize();
    animate();

    window.addEventListener("resize", onWindowResize);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xbbbbbb, 0.3));
    scene.background = new THREE.Color(0x040d21);

    camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    const dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    const dLight2 = new THREE.PointLight(0x8566cc, 0.5);
    dLight2.position.set(-200, 500, 200);
    camera.add(dLight2);

    camera.position.set(0, 0, 400);
    scene.add(camera);

    scene.fog = new THREE.Fog(0x535ef3, 400, 2000);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1;
    controls.autoRotate = false;
    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 3;
  }

  function initGlobe(ThreeGlobe) {
    globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    })
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(true)
      .atmosphereColor("#3a228a")
      .atmosphereAltitude(0.25)
      .hexPolygonColor((e) => {
        return [
          "KGZ",
          "KOR",
          "THA",
          "RUS",
          "UZB",
          "IDN",
          "KAZ",
          "MYS",
        ].includes(e.properties.ISO_A3)
          ? "rgba(255,255,255, 1)"
          : "rgba(255,255,255, 0.7)";
      });

    // Add the globe first
    scene.add(globe);

    // Then progressively add arcs and airport data
    setTimeout(() => {
      globe
        .arcsData(travelHistory.flights)
        .arcColor((e) => (e.status ? "#9cff00" : "#FF4000"))
        .arcAltitude((e) => e.arcAlt)
        .arcStroke((e) => (e.status ? 0.5 : 0.3))
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e) => e.order * 1)
        .labelsData(airportHistory.airports)
        .labelColor(() => "#ffcb21")
        .labelDotOrientation((e) => (e.text === "ALA" ? "top" : "right"))
        .labelDotRadius(0.3)
        .labelSize((e) => e.size)
        .labelText("city")
        .labelResolution(6)
        .labelAltitude(0.01)
        .pointsData(airportHistory.airports)
        .pointColor(() => "#ffffff")
        .pointsMerge(true)
        .pointAltitude(0.07)
        .pointRadius(0.05);
    }, 2000); // Adding delay to improve perceived load time

    globe.rotateY(-Math.PI * (5 / 9));
    globe.rotateZ(-Math.PI / 6);

    const globeMaterial = globe.globeMaterial();
    globeMaterial.color = new THREE.Color(0x3a228a);
    globeMaterial.emissive = new THREE.Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;
  }

  function onMouseMove(event: MouseEvent) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    windowHalfX = window.innerWidth / 1.5;
    windowHalfY = window.innerHeight / 1.5;
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    camera.position.x +=
      Math.abs(mouseX) <= windowHalfX / 2
        ? (mouseX / 2 - camera.position.x) * 0.005
        : 0;
    camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
    camera.lookAt(scene.position);
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
</script>

<div class="fullscreen" bind:this={container}></div>

<style>
  .fullscreen {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
</style>
