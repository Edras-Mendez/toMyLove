// import { useEffect } from "react";

// const Fireworks = () => {
//   useEffect(() => {
//     // SVG spritesheet insert
//     const parser = new DOMParser();
//     const svgMarkup = `
//       <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
//         <symbol id="icon-spark" viewBox="0 0 32 32">
//           <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12Z"/>
//         </symbol>
//       </svg>
//     `;
//     const svgElement = parser.parseFromString(svgMarkup, "image/svg+xml").documentElement;
//     document.body.appendChild(svgElement);

//     // Original JS from your file
//     const canvas = document.getElementById("fireworks-canvas");
//     const ctx = canvas.getContext("2d");
//     let w = (canvas.width = window.innerWidth);
//     let h = (canvas.height = window.innerHeight);

//     const fireworks = [];
//     const particles = [];
//     const colors = ["#ff2d00", "#ff7300", "#ffeb00", "#47ff00", "#00ffee", "#2b65ff", "#8000ff", "#ff00aa"];

//     class Firework {
//       constructor() {
//         this.x = Math.random() * w;
//         this.y = h;
//         this.targetY = Math.random() * h * 0.5;
//         this.speed = 3 + Math.random() * 3;
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//         this.radius = 2;
//         this.exploded = false;
//       }
//       update() {
//         this.y -= this.speed;
//         if (this.y <= this.targetY && !this.exploded) {
//           this.exploded = true;
//           for (let i = 0; i < 30; i++) {
//             particles.push(new Particle(this.x, this.y, this.color));
//           }
//         }
//       }
//       draw() {
//         if (!this.exploded) {
//           ctx.beginPath();
//           ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//           ctx.fillStyle = this.color;
//           ctx.fill();
//         }
//       }
//     }

//     class Particle {
//       constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.speed = Math.random() * 5;
//         this.angle = Math.random() * Math.PI * 2;
//         this.radius = 2;
//         this.color = color;
//         this.alpha = 1;
//         this.gravity = 0.05;
//       }
//       update() {
//         this.x += Math.cos(this.angle) * this.speed;
//         this.y += Math.sin(this.angle) * this.speed + this.gravity;
//         this.alpha -= 0.02;
//       }
//       draw() {
//         ctx.save();
//         ctx.globalAlpha = this.alpha;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     function animate() {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
//       ctx.fillRect(0, 0, w, h);
//       if (Math.random() < 0.05) fireworks.push(new Firework());

//       fireworks.forEach((fw, i) => {
//         fw.update();
//         fw.draw();
//         if (fw.exploded) fireworks.splice(i, 1);
//       });

//       particles.forEach((p, i) => {
//         p.update();
//         p.draw();
//         if (p.alpha <= 0) particles.splice(i, 1);
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const resize = () => {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", resize);

//     return () => {
//       window.removeEventListener("resize", resize);
//       document.body.removeChild(svgElement);
//     };
//   }, []);

//   return <canvas id="fireworks-canvas"></canvas>;
// };

// export default Fireworks;


import { useEffect, useRef } from "react";

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Verifica si el canvas ya está en el DOM
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const parser = new DOMParser();
    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
        <symbol id="icon-spark" viewBox="0 0 32 32">
          <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12Z"/>
        </symbol>
      </svg>
    `;
    const svgElement = parser.parseFromString(svgMarkup, "image/svg+xml").documentElement;
    document.body.appendChild(svgElement);

    const fireworks = [];
    const particles = [];
    const colors = ["#ff2d00", "#ff7300", "#ffeb00", "#47ff00", "#00ffee", "#2b65ff", "#8000ff", "#ff00aa"];

    class Firework {
      constructor() {
        this.x = Math.random() * w;
        this.y = h;
        this.targetY = Math.random() * h * 0.5;
        this.speed = 3 + Math.random() * 3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.radius = 2;
        this.exploded = false;
      }
      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY && !this.exploded) {
          this.exploded = true;
          for (let i = 0; i < 30; i++) {
            particles.push(new Particle(this.x, this.y, this.color));
          }
        }
      }
      draw() {
        if (!this.exploded) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 5;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 2;
        this.color = color;
        this.alpha = 1;
        this.gravity = 0.05;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.alpha -= 0.02;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, w, h);
      if (Math.random() < 0.05) fireworks.push(new Firework());

      fireworks.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.exploded) fireworks.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      document.body.removeChild(svgElement);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", position: "fixed", top: 0, left: 0, zIndex: 1000 }} />;
};

export default Fireworks;
