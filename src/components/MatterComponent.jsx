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
        background:
          "linear-gradient(135deg, rgba(0, 204, 255, 0.1), rgba(255, 255, 255, 0.5))", // Smooth gradient background
      },
    });

    // Adding different shapes with clean and light colors
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
              fillStyle: `rgba(0, 204, 255, 0.6)`, // Light color
            },
          });
          break;
        case 1: // Rectangle
          shape = Bodies.rectangle(x, y, size, size / 2, {
            render: {
              fillStyle: `rgba(255, 158, 128, 0.6)`, // Soft peach color
            },
          });
          break;
        case 2: // Square
          shape = Bodies.rectangle(x, y, size, size, {
            render: {
              fillStyle: `rgba(255, 255, 255, 0.6)`, // White with transparency
            },
          });
          break;
        case 3: // Triangle
          shape = Bodies.polygon(x, y, 3, size, {
            render: {
              fillStyle: `rgba(144, 202, 249, 0.6)`, // Soft blue color
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

    // Move shapes when the mouse is near them
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
