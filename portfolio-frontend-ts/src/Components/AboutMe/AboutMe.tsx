import React, { useEffect } from 'react';
import { FaFileVideo } from 'react-icons/fa';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function AboutMe() {

    useEffect(() => {
        var width = document.body.clientWidth > 750 ? document.body.clientWidth / 2 : document.body.clientWidth;
        var height = document.body.clientWidth > 750 ? window.innerHeight : document.body.clientWidth;
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enabled = false;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        // document.body.appendChild(renderer.domElement);

        const light = new THREE.PointLight(0xff0000, 5, 100);
        light.position.set(50, 50, 50);
        scene.add(light);

        const div = document.getElementById('about-me__scan-me');
        div.innerHTML = "";
        div.appendChild(renderer.domElement);

        const colorIndex: number = 0;

        let scan;

        const loader = new GLTFLoader();
        loader.load('/assets/me-scan.glb', function (gltf) {
            // gltf.scene.scale.set(0.5, 0.5, 0.5);
            scan = gltf.scene;
            scene.add(scan);
        },
            (xhr) => {
                // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            });

        camera.position.z = 4;

        controls.update();

        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {

            var width = document.body.clientWidth > 750 ? document.body.clientWidth / 2 : document.body.clientWidth;
            var height = document.body.clientWidth > 750 ? window.innerHeight : window.innerHeight / 2;

            if (document.body.clientWidth < 750) {
                camera.position.z = 4;
            }

            camera.aspect = width / height;

            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            controls.update();
        }

        scene.rotation.y = -1;


        div.addEventListener('click', () => {

            light.color = { b: Math.random(), g: Math.random(), r: Math.random() };
        })

        let rotatationYChange = 0.01;

        var animate = function () {
            requestAnimationFrame(animate);
            controls.update();

            if (scene.rotation.y >= 0.7) {
                rotatationYChange = -0.005;
            }
            if (scene.rotation.y <= -0.7) {
                rotatationYChange = 0.005;
            }
            scene.rotation.y += rotatationYChange;

            renderer.render(scene, camera);
        };
        animate();

    }, [])

    return (
        <section className="about-me">
            <div className="about-me__content">
                <h1 className="about-me__title">Hi, I'm Mikołaj</h1>
                <p className="about-me__description">
                    I run a blog NagrywajFilmy.pl, an online store, YouTube channel and a blog under the brand name BabyExpert. I am currently looking for challenges as a JavaScript developer. If you see anything I can help you with, please write to me.                </p>
                <button className="about-me__scroll-to-contact" onClick={() => document.querySelector('.contact').scrollIntoView({ block: 'end', behavior: 'smooth' })}>Contact</button>
            </div>

            <div className="about-me__scan-me" id="about-me__scan-me"></div>
        </section>
    );
}

export default AboutMe;