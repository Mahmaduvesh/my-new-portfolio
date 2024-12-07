import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      Body = Matter.Body,
      Events = Matter.Events;

    const engine = Engine.create();
    engine.world.gravity.y = 0;

    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "#ffffff", // White background
      },
    });

    // Add multiple shapes with light colors
    const shapes = [];
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      const size = Math.random() * 40 + 20;

      const shapeType = Math.floor(Math.random() * 4); // Randomize shape type

      let shape;
      switch (shapeType) {
        case 0: // Circle
          shape = Bodies.circle(x, y, size / 2, {
            render: {
              fillStyle: `hsl(${Math.random() * 360}, 100%, 80%)`, // Light color (hue variation)
            },
          });
          break;
        case 1: // Rectangle
          shape = Bodies.rectangle(x, y, size, size / 2, {
            render: {
              fillStyle: `hsl(${Math.random() * 360}, 100%, 80%)`, // Light color (hue variation)
            },
          });
          break;
        case 2: // Square (rectangle with equal width/height)
          shape = Bodies.rectangle(x, y, size, size, {
            render: {
              fillStyle: `hsl(${Math.random() * 360}, 100%, 80%)`, // Light color (hue variation)
            },
          });
          break;
        case 3: // Triangle
          shape = Bodies.polygon(x, y, 3, size, {
            render: {
              fillStyle: `hsl(${Math.random() * 360}, 100%, 80%)`, // Light color (hue variation)
            },
          });
          break;
        default:
          shape = Bodies.circle(x, y, size / 2); // Default to circle
          break;
      }
      shapes.push(shape);
      World.add(engine.world, shape);
    }

    const mouse = Mouse.create(render.canvas);

    // Move shapes slightly when mouse moves near them
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;

      shapes.forEach((shape) => {
        const distance = Math.hypot(
          mouse.position.x - shape.position.x,
          mouse.position.y - shape.position.y
        );

        if (distance < 150) {
          const force = 0.01;
          const angle = Math.atan2(
            mouse.position.y - shape.position.y,
            mouse.position.x - shape.position.x
          );

          Body.applyForce(shape, shape.position, {
            x: -force * Math.cos(angle),
            y: -force * Math.sin(angle),
          });
        }
      });
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const resizeHandler = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default MatterComponent;
