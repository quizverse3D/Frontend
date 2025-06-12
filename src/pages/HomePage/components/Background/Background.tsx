import { useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import styles from './Background.module.scss';

export const InfiniteParticlesBackground = () => {
    const mountRef = useRef(null); // Ссылка на DOM-элемент для монтирования Three.js
    const animationRef = useRef(); // Ссылка на ID анимации
    const particlesRef = useRef(); // Ссылка на объект частиц
    const sceneRef = useRef(); // Ссылка на сцену Three.js
    const cameraRef = useRef(); // Ссылка на камеру Three.js
    const rendererRef = useRef(); // Ссылка на рендерер Three.js

    // Конфигурация частиц. Используем useMemo, чтобы она не пересчитывалась при каждом рендере
    const particlesConfig = useMemo(
        () => ({
            count: 10000,
            size: 2,
            color: 0x00f5d4,
            areaSize: 3000,
            speed: 0.5,
            rotationSpeed: 0.001,
        }),
        []
    );

    // Создание частиц
    const createParticles = useCallback(() => {
        // Создаем массивы для позиций и размеров частиц
        const positions = new Float32Array(particlesConfig.count * 3);
        const sizes = new Float32Array(particlesConfig.count);

        for (let i = 0; i < particlesConfig.count * 3; i += 3) {
            // Равномерное распределение в сфере
            const radius =
                (Math.cbrt(Math.random()) * particlesConfig.areaSize) / 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = radius * Math.cos(phi);

            sizes[i / 3] = particlesConfig.size * (0.5 + Math.random() * 0.5);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            color: particlesConfig.color,
            size: particlesConfig.size,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particles = new THREE.Points(geometry, material);
        particles.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        return particles;
    }, [particlesConfig]);

    // Инициализация Three.js
    const initThreeScene = useCallback(() => {
        if (!mountRef.current) return;

        // Сцена
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020217, 0.0005);
        sceneRef.current = scene;

        // Камера
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.z = 500;
        cameraRef.current = camera;

        // Рендерер
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Частицы
        const particles = createParticles();
        scene.add(particles);
        particlesRef.current = particles;

        // Обработчик ресайза
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;

            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [createParticles]);

    // Анимация
    const animate = useCallback(() => {
        animationRef.current = requestAnimationFrame(animate);

        if (
            particlesRef.current &&
            sceneRef.current &&
            cameraRef.current &&
            rendererRef.current
        ) {
            // Плавное вращение
            particlesRef.current.rotation.y +=
                particlesConfig.rotationSpeed * 0.5;
            particlesRef.current.rotation.x +=
                particlesConfig.rotationSpeed * 0.2;

            // Эффект движения вперед через изменение позиции камеры
            cameraRef.current.position.z -= particlesConfig.speed;

            // Рециклинг частиц - когда камера проходит определенную дистанцию,
            // мы сбрасываем ее позицию и перемещаем частицы
            if (cameraRef.current.position.z < -1000) {
                cameraRef.current.position.z = 500;
                if (particlesRef.current) {
                    particlesRef.current.position.z += 1500;
                }
            }

            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    }, [particlesConfig]);

    useEffect(() => {
        initThreeScene();
        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            if (mountRef.current && rendererRef.current?.domElement) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }

            // Освобождение памяти
            if (particlesRef.current) {
                const geometry = particlesRef.current.geometry;
                const material = particlesRef.current.material;

                geometry.dispose();
                if (Array.isArray(material)) {
                    material.forEach((m) => m.dispose());
                } else {
                    material.dispose();
                }
            }

            rendererRef.current?.dispose();
        };
    }, [initThreeScene, animate]);

    return <div ref={mountRef} className={styles.background} />;
};
