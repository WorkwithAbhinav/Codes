import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Buttons from "./Buttons";

import { BottomLine } from "../components/design/Hero"
import { BackgroundCircles } from "../components/design/Hero";
import { Gradient } from "../components/design/Hero";
import { heroIcons } from "../constants"
import { ScrollParallax } from "react-just-parallax";
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
        <div className="relative max-w-[23rem] mx-auto xl:mb-24 md:max-w-5xl">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="rounded-b-[0.9rem] overflow-hidden aspect-[33/40] md:aspect-[688/490]  lg:aspect-[1024/490] ">
                <img
                  src={robot}
                  className="w-full md:scale-[1] scale-[1.7] translate-y-[8%]
                    md:translate-y-[10%] lg:-translate-y-[23%]
                  "
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={heroBackground} width={1440} height={1800} />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden lg:block z-10 mt-20 relative"/>
      </div>
      <BottomLine/>
    </Section>
  );
};

export default Hero;
