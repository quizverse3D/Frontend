import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export const MatrixRain: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Инициализация сцены
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current?.appendChild(renderer.domElement);

        // 2. Настройки эффекта (как в фильме)
        const COLUMNS = 50;
        const CHAR_SIZE = 0.2;
        const FALL_SPEED = 0.05;
        const TRAIL_LENGTH = 15; // Длина "хвоста" у символов

        // 3. Символы (только латиница и цифры)
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const particles: THREE.Mesh[] = [];

        // 4. Загрузка моноширинного шрифта
        const fontLoader = new FontLoader();
        fontLoader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            (font) => {
                // Создаём колонки символов
                for (let i = 0; i < COLUMNS; i++) {
                    const x = (i / COLUMNS) * 20 - 10;

                    // Главный яркий символ
                    createParticle(x, 10, true);

                    // Создаём "хвост" из тусклых символов
                    for (let j = 1; j < TRAIL_LENGTH; j++) {
                        createParticle(x, 10 - j * CHAR_SIZE * 1.2, false);
                    }
                }

                function createParticle(x: number, y: number, isHead: boolean) {
                    const char =
                        chars[Math.floor(Math.random() * chars.length)];
                    const geometry = new TextGeometry(char, {
                        font: font,
                        size: CHAR_SIZE,
                        height: 0.01,
                    });

                    const material = new THREE.MeshBasicMaterial({
                        color: new THREE.Color(0x00ff00),
                        transparent: true,
                        opacity: isHead ? 1 : 0.3 * (1 - y / 20), // Плавное затухание
                    });

                    const particle = new THREE.Mesh(geometry, material);
                    particle.position.set(x, y, 0);
                    particle.userData = {
                        speed: FALL_SPEED * (0.7 + Math.random() * 0.6),
                        isHead: isHead,
                        originalY: y,
                    };
                    scene.add(particle);
                    particles.push(particle);
                }

                // 5. Анимация с deltaTime для плавности
                let lastTime = 0;
                const animate = (time: number) => {
                    requestAnimationFrame(animate);
                    const deltaTime = (time - lastTime) / 1000;
                    lastTime = time;

                    particles.forEach((particle) => {
                        particle.position.y -=
                            particle.userData.speed * deltaTime * 60;

                        // Если символ ушёл за нижнюю границу
                        if (particle.position.y < -10) {
                            particle.position.y = 10;

                            // Обновляем символ в голове
                            if (particle.userData.isHead) {
                                const char =
                                    chars[
                                        Math.floor(Math.random() * chars.length)
                                    ];
                                particle.geometry.dispose();
                                particle.geometry = new TextGeometry(char, {
                                    font: font,
                                    size: CHAR_SIZE,
                                    height: 0.01,
                                });
                            }
                        }
                    });

                    renderer.render(scene, camera);
                };

                animate(0);
            }
        );

        // 6. Ресайз
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            particles.forEach((p) => {
                p.geometry.dispose();
                p.material.dispose();
                scene.remove(p);
            });
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1,
                width: '100vw',
                height: '100vh',
            }}
        />
    );
};
