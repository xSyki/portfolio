import React, { useEffect } from 'react';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function SplashScreen() {

    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, document.body.clientWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 100;
        controls.enablePan = false;
        controls.enableZoom = false;
        if (document.body.clientWidth < 750) {
            controls.enabled = false;
        }
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(document.body.clientWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);

        const div = document.getElementById('splash-screen__logo-3d');
        div.innerHTML = "";
        div.appendChild(renderer.domElement);

        var logo;

        const loader = new GLTFLoader();
        loader.load('/assets/logo-3d.glb', function (gltf) {
            gltf.scene.scale.set(0.5, 0.5, 0.5);
            logo = gltf.scene;
            scene.add(logo);
        },
            (xhr) => {
                // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            });

        div.addEventListener('mousedown', function (e) {
            if (e.button === 1) {
                controls.enableZoom = true;
            }
        });

        div.addEventListener('mouseup', function (e) {
            if (e.button === 1) {
                controls.enableZoom = false;
            }
        });

        camera.position.z = 5;
        controls.update();

        const stars = [];
        for (let i = 0; i < 1000; i++) {
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            stars.push(star);
        }
        let starGeo = new THREE.BufferGeometry().setFromPoints(stars)
        let line = new THREE.Line(starGeo, new THREE.LineBasicMaterial({ color: 0x888888 }))
        line.material.color.b = 0.5;
        line.material.color.g = 0.5;
        line.material.color.r = 0.5;
        scene.add(line);

        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {

            camera.aspect = document.body.clientWidth / window.innerHeight;

            camera.updateProjectionMatrix();
            renderer.setSize(document.body.clientWidth, window.innerHeight);

            if (document.body.clientWidth < 750) {
                controls.enabled = false;
            } else {
                controls.enabled = true;
            }
        }

        var animate = function () {
            requestAnimationFrame(animate);
            controls.update();

            line.rotation.x += 0.0002
            line.rotation.z += 0.00005
            line.rotation.y -= 0.0001

            renderer.render(scene, camera);
        };
        animate();

    }, [])

    return (
        <section className="splash-screen">

            <div class="hand-icon">
                <div class="hand-icon__hand">
                    <div class="hand-icon__circle"></div>
                </div>
            </div>

            <div className="splash-screen__logo-3d" id="splash-screen__logo-3d"></div>
            <div className="splash-screen__arrows">
                <span className="splash-screen__down-arrow"></span>
                <span className="splash-screen__down-arrow"></span>
                <span className="splash-screen__down-arrow"></span>
            </div>
        </section>
    );
}

export default SplashScreen;