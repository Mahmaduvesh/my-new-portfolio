import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Dimensions for the canvas
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      Body = Matter.Body,
      Events = Matter.Events,
      Common = Matter.Common;

    // Create engine
    const engine = Engine.create();
    engine.world.gravity.y = 0;

    // Create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "rgb(240,240,240)",
      },
    });

    // Create a body with an attractor
    const attractiveBody = Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 4, dimensions.height / 4) / 2,
      {
        isStatic: true,
        render: {
          fillStyle: "rgb(240,240,240)",
        },
      }
    );

    World.add(engine.world, attractiveBody);

    // Add some bodies
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, dimensions.width);
      let y = Common.random(0, dimensions.height);
      let size = Common.random(10, 80);
      const body = Bodies.polygon(x, y, Common.random(3, 6), size, {
        mass: size / 20,
        friction: 0,
        frictionAir: 0.02,
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: "#DDDDDD",
          lineWidth: 2,
        },
      });

      World.add(engine.world, body);
    }

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Run engine and renderer
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Handle window resize
    const resizeHandler = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);

    // Cleanup on component unmount
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
