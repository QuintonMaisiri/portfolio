import { useEffect, useRef, useState } from "react";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(6);

  // game state refs
  const snakeRef = useRef<{ x: number; y: number }[]>([]);
  const dirRef = useRef<{ x: number; y: number }>({ x: 1, y: 0 });
  const appleRef = useRef<{ x: number; y: number }>({ x: 5, y: 5 });
  const lastTimeRef = useRef<number | null>(null);
  const accRef = useRef(0);

  const GRID = 20;
  const WIDTH = 480;
  const HEIGHT = 480;
  const COLS = WIDTH / GRID;
  const ROWS = HEIGHT / GRID;

  function reset() {
    snakeRef.current = [
      { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
      { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) }
    ];
    dirRef.current = { x: 1, y: 0 };
    placeApple();
    setScore(0);
    setRunning(true);
    lastTimeRef.current = null;
    accRef.current = 0;
  }

  function placeApple() {
    while (true) {
      const p = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS)
      };
      if (!snakeRef.current.some((s) => s.x === p.x && s.y === p.y)) {
        appleRef.current = p;
        break;
      }
    }
  }

  function step() {
    const snake = snakeRef.current;
    const dir = dirRef.current;
    const apple = appleRef.current;

    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    // collision
    if (
      head.x < 0 ||
      head.x >= COLS ||
      head.y < 0 ||
      head.y >= ROWS ||
      snake.some((s) => s.x === head.x && s.y === head.y)
    ) {
      setRunning(false);
      return;
    }

    snake.unshift(head);

    // apple
    if (head.x === apple.x && head.y === apple.y) {
      setScore((s) => s + 1);
      placeApple();
    } else {
      snake.pop();
    }
  }

  function draw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // background
    ctx.fillStyle = "#1e293b"; // slate-800
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // apple (pulsing circle)
    const apple = appleRef.current;
    const pulse = 4 + Math.sin(Date.now() / 150) * 2;
    ctx.fillStyle = "#2dd4bf"; // teal-400
    ctx.beginPath();
    ctx.arc(
      apple.x * GRID + GRID / 2,
      apple.y * GRID + GRID / 2,
      (GRID / 2) - pulse,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // snake
    const snake = snakeRef.current;
    snake.forEach((s, i) => {
      if (i === 0) {
        // head rounded teal-500
        ctx.fillStyle = "#14b8a6";
        ctx.beginPath();
        const radius = 6;
        const x = s.x * GRID + 1;
        const y = s.y * GRID + 1;
        const w = GRID - 2;
        const h = GRID - 2;
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + w - radius, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
        ctx.lineTo(x + w, y + h - radius);
        ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        ctx.lineTo(x + radius, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
      } else {
        // transparent tail gradient effect
        const alpha = Math.max(0.1, 1 - i * 0.08);
        ctx.fillStyle = `rgba(20, 184, 166, ${alpha})`;
        ctx.fillRect(s.x * GRID + 1, s.y * GRID + 1, GRID - 2, GRID - 2);
      }
    });
  }

  function loop(timestamp: number) {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    const msPerStep = 1000 / speed;
    accRef.current += delta;

    if (running) {
      while (accRef.current >= msPerStep) {
        step();
        accRef.current -= msPerStep;
      }
    }

    draw();
    requestAnimationFrame(loop);
  }

  // keyboard
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      const key = e.key;
      const dir = dirRef.current;

      const opposite = {
        ArrowUp: "ArrowDown",
        ArrowDown: "ArrowUp",
        ArrowLeft: "ArrowRight",
        ArrowRight: "ArrowLeft",
        w: "s",
        s: "w",
        a: "d",
        d: "a"
      } as any;

      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(key)
      ) {
        e.preventDefault();
        if (opposite[key] === oppositeToKey(dir)) return;
        setDirFromKey(key);
      }

      if (key === " ") {
        setRunning((r) => !r);
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  function oppositeToKey(dir: { x: number; y: number }) {
    if (dir.x === 1) return "ArrowRight";
    if (dir.x === -1) return "ArrowLeft";
    if (dir.y === 1) return "ArrowDown";
    return "ArrowUp";
  }

  function setDirFromKey(k: string) {
    switch (k) {
      case "ArrowUp":
      case "w":
        dirRef.current = { x: 0, y: -1 };
        break;
      case "ArrowDown":
      case "s":
        dirRef.current = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
      case "a":
        dirRef.current = { x: -1, y: 0 };
        break;
      case "ArrowRight":
      case "d":
        dirRef.current = { x: 1, y: 0 };
        break;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // HiDPI fix
    const dpr = window.devicePixelRatio || 1;
    canvas.style.width = WIDTH + "px";
    canvas.style.height = HEIGHT + "px";
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    reset();
    requestAnimationFrame(loop);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-bold">Snake Game</h1>
      <canvas ref={canvasRef} className="rounded-lg shadow-xl" />

      <div className="flex items-center gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Restart
        </button>

        <button
          onClick={() => setRunning((r) => !r)}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          {running ? "Pause" : "Resume"}
        </button>

        <div className="font-semibold text-green-400">Score: {score}</div>
      </div>

      <div className="flex flex-col items-center text-sm">
        <label>Speed: {speed}</label>
        <input
          type="range"
          min={4}
          max={16}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
