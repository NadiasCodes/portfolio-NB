import React from "react";
import AnimatedCursor from "react-animated-cursor";

const MouseCursor = () => {
  return (
    <div>
      <AnimatedCursor innerSize={8} outerSize={6} color="141, 138, 154" outerAlpha={0.4} innerScale={2} outerScale={7} showSystemCursor={false} clickables={["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"]} />
    </div>
  );
};

export default MouseCursor;
