import { useEffect, useRef } from 'react';
import './HeartBackground.css';

const HeartBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const bg = bgRef.current;
      if (!bg) return;

      const r_num = Math.floor(Math.random() * 40) + 1;
      const r_size = Math.floor(Math.random() * 65) + 10;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 5) + 5;

      const heart1 = document.createElement('div');
      heart1.className = 'heart';
      heart1.style.width = `${r_size}px`;
      heart1.style.height = `${r_size}px`;
      heart1.style.left = `${r_left}%`;
      heart1.style.background = `rgba(255,${r_bg - 25},${r_bg},1)`;
      heart1.style.animation = `love ${r_time}s ease`;

      const heart2 = document.createElement('div');
      heart2.className = 'heart';
      heart2.style.width = `${r_size - 10}px`;
      heart2.style.height = `${r_size - 10}px`;
      heart2.style.left = `${r_left + r_num}%`;
      heart2.style.background = `rgba(255,${r_bg - 25},${r_bg + 25},1)`;
      heart2.style.animation = `love ${r_time + 5}s ease`;

      bg.appendChild(heart1);
      bg.appendChild(heart2);

      const hearts = bg.querySelectorAll('.heart');
      hearts.forEach((heart) => {
        const top = parseFloat(getComputedStyle(heart).top);
        const width = parseFloat(getComputedStyle(heart).width);
        if (top >= window.innerHeight || width >= 150) {
          heart.remove();
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div className="bg_heart" ref={bgRef}></div>;
};

export default HeartBackground;

