import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Buttons from "./Buttons";

import { BottomLine } from "../components/design/Hero"

import { useRef } from "react";
import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";
const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI chatting with {" "}
            <span className="inline-block relative">
            Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt={curve}
              />
            </span>
          </h1>
          <p className="max-w-3xl body-1 mx-auto mb-6 lg:mb-8 text-n-2">
            unleash the power of AI whith Brainwave. Upgrade the productivity
            with Brainwave AI chat app
          </p>
          <Buttons href="/pricing">Get Started</Buttons>
        </div>
        
        
      </div>
      <BottomLine/>
    </Section>
  );
};

export default Hero;
