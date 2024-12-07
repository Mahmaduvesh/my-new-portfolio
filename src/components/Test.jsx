import React from "react";
import ParticlesConfigs from "../components/ParticlesConfig";
import Particles from "react-tsparticles";

function Test() {
  return (
    <div>
      <Particles options={ParticlesConfigs} />
      Test
    </div>
  );
}

export default Test;
