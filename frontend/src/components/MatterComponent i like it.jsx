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

    // Render setup with a dynamic background
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background:
          "linear-gradient(135deg, rgba(0, 204, 255, 0.1), rgba(255, 255, 255, 0.1))",
      },
    });

    // Add shapes
    const shapes = [];
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      const size = Math.random() * 40 + 20;

      const shapeType = Math.floor(Math.random() * 4);

      let shape;
      switch (shapeType) {
        case 0: // Circle
          shape = Bodies.circle(x, y, size / 2, {
            render: {
              fillStyle: `rgba(0, 204, 255, 0.6)`,
            },
          });
          break;
        case 1: // Rectangle
          shape = Bodies.rectangle(x, y, size, size / 2, {
            render: {
              fillStyle: `rgba(255, 158, 128, 0.6)`,
            },
          });
          break;
        case 2: // Square
          shape = Bodies.rectangle(x, y, size, size, {
            render: {
              fillStyle: `rgba(255, 255, 255, 0.6)`,
            },
          });
          break;
        case 3: // Triangle
          shape = Bodies.polygon(x, y, 3, size, {
            render: {
              fillStyle: `rgba(144, 202, 249, 0.6)`,
            },
          });
          break;
        default:
          shape = Bodies.circle(x, y, size / 2);
          break;
      }
      shapes.push(shape);
      World.add(engine.world, shape);
    }

    const mouse = Mouse.create(render.canvas);

    // Mouse movement effects
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;

      shapes.forEach((shape) => {
        const distance = Math.hypot(
          mouse.position.x - shape.position.x,
          mouse.position.y - shape.position.y
        );

        // Apply force to make shapes "follow" the mouse smoothly
        const force = 0.001 * Math.max(1, 500 / distance); // A softer force
        const angle = Math.atan2(
          mouse.position.y - shape.position.y,
          mouse.position.x - shape.position.x
        );

        // Smooth movement towards the mouse (making the shapes connected)
        Body.applyForce(shape, shape.position, {
          x: force * Math.cos(angle),
          y: force * Math.sin(angle),
        });

        // Hover effect (magical glow) when near the mouse
        if (distance < 100) {
          shape.render.fillStyle = "rgba(0, 204, 255, 1)"; // Glowing effect
          Body.scale(shape, 1.05, 1.05); // Increase size on hover

          // Adding a shadow for glowing effect
          shape.render.shadow = {
            blur: 20,
            color: "rgba(0, 204, 255, 0.8)",
            offsetX: 5,
            offsetY: 5,
          };
        } else {
          // Restore normal state after hover
          shape.render.fillStyle = `rgba(0, 204, 255, 0.6)`;
          shape.render.shadow = null;
        }

        // Smoothly reduce the shape size if it gets too large
        if (shape.bounds.max.x - shape.bounds.min.x > 100) {
          Body.scale(shape, 0.99, 0.99);
        }
      });
    });

    // Start rendering
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Resize handler to maintain the canvas size
    const resizeHandler = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);

    // Cleanup on unmount
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
