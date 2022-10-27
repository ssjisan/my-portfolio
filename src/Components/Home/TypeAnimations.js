import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimations() {
  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        "I Love to work with Front-end development",
        1000,
        "I Love to work with Prototyping with figma",
        1000,
        "I Love to work with UI/UX designing",
        1000
      ]}
      speed={25} // Custom Speed from 1-99 - Default Speed: 40
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  );
}
