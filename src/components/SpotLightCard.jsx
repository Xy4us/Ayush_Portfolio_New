import React, { useState } from "react";
import { motion } from "framer-motion";

const SpotLightCard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          width: "200px",
          height: "200px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#030014",
          color: "white",
          width: "20rem",
          height: "15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "15px",
        }}
      >
        Hover over me
      </motion.div>
    </div>
  );
};

export default SpotLightCard;
