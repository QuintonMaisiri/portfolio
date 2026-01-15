"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

interface SnakeGameProps {
  gridSize?: number;
  tileSize?: number;
  speed?: number; // lower = faster
  className?: string;
  onEatFood?: () => void;
}

export default function SnakeGame({
  gridSize = 24,
  tileSize = 10,
  speed = 120,
  className = "",
  onEatFood,
}: SnakeGameProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snake = useRef<Point[]>([{ x: 10, y: 10 }]);
  const direction = useRef<Point>({ x: 1, y: 0 });
  const food = useRef<Point>({
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const canvasSize = gridSize * tileSize;

  const resetGame = () => {
    snake.current = [{ x: 10, y: 10 }];
    direction.current = { x: 1, y: 0 };
    food.current = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    setIsGameStarted(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const dirMap: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };

      if (dirMap[e.key]) {
        const newDir = dirMap[e.key];
        // Prevent reversing direction (moving opposite to current direction)
        if (
          direction.current.x + newDir.x !== 0 ||
          direction.current.y + newDir.y !== 0
        ) {
          direction.current = newDir;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const startGameLoop = () => {
      gameLoopRef.current = setInterval(() => {
        ctx.clearRect(0, 0, canvasSize, canvasSize);

        const head = {
          x: snake.current[0].x + direction.current.x,
          y: snake.current[0].y + direction.current.y,
        };

        // Wall collision
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= gridSize ||
          head.y >= gridSize
        ) {
          resetGame();
          return;
        }

        // Self collision
        if (
          snake.current.some(
            (segment) => segment.x === head.x && segment.y === head.y
          )
        ) {
          resetGame();
          return;
        }

        snake.current.unshift(head);

        // Food collision
        if (head.x === food.current.x && head.y === food.current.y) {
          food.current = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          };
          onEatFood && onEatFood();
        } else {
          snake.current.pop();
        }

        // Draw food
        ctx.fillStyle = "red";
        ctx.fillRect(
          food.current.x * tileSize,
          food.current.y * tileSize,
          tileSize,
          tileSize
        );

        // Draw snake
        ctx.fillStyle = "lime";
        snake.current.forEach((segment) => {
          ctx.fillRect(
            segment.x * tileSize,
            segment.y * tileSize,
            tileSize,
            tileSize
          );
        });
      }, speed);
    };

    if (isGameStarted) {
      startGameLoop();
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvasSize, gridSize, speed, tileSize, isGameStarted, onEatFood]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={400}
        className={`bg-[#1D293D] ${className} rounded-[8px] shadow-[inset_0_4px_8px_rgba(0,0,0,0.25)]`}
      />
      {!isGameStarted && (
        <button
          onClick={() => setIsGameStarted(true)}
          className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-[#FFB86A] hover:bg-[#E6A85F]/80 text-black px-[12px] py-[10px] rounded-lg shadow-lg transition-colors"
        >
          start-game
        </button>
      )}
    </div>
  );
}