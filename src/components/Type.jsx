import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Frontend Developer",
          "React Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 60,        // typing speed
        deleteSpeed: 40,  // deleting speed
      }}
    />
  );
}

export default Type;
