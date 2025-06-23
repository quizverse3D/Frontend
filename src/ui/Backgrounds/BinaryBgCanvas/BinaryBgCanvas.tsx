// BinaryBgCanvas.tsx
import React, { useEffect, useRef } from 'react';
import cls from './BinaryBgCanvas.module.scss';

interface CanvasColors {
    neonColor: string;
    bgColor: string;
}

export const BinaryBgCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const colors: CanvasColors = cls as unknown as CanvasColors;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Установка размеров canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Параметры эффекта
        const chars = '01?!';
        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Массив для хранения позиций капель
        const drops: number[] = Array(Math.floor(columns)).fill(1);

        function draw() {
            // Полупрозрачный черный фон для эффекта шлейфа
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Цвет символов - зеленый
            ctx.fillStyle = colors.neonColor;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Случайный символ
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Рисуем символ
                ctx.fillText(text, i * fontSize, drops[i] * fontSize );

                // Случайный сброс капли в начало
                if (
                    drops[i] * fontSize > canvas.height &&
                    Math.random() > 0.975
                ) {
                    drops[i] = 0;
                }

                // Увеличиваем Y-координату
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 80);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className={cls.BinaryBgCanvas} />;
};
