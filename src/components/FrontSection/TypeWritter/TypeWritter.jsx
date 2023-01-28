import React from "react";
import Typewriter from "typewriter-effect";

const TypeWritter = () => {
  return (
    <div>
      <h1>
        Want to learn
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="color: #27ae60;">DevOps?</span>')
              .pauseFor(1500)
              .deleteAll()
              .typeString('<span style="color: #FFBF00">AWS?</span>')
              .pauseFor(1500)
              .deleteAll()
              .typeString('<span style="color: #DE3163">Java?</span>')
              .pauseFor(1500)
              .deleteAll()
              .typeString('<span style="color: #00d2ff;">Python?</span>')
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      </h1>
    </div>
  );
};

export default TypeWritter;
