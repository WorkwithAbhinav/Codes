import { collabApps, collabContent, collabText } from "../constants";
import Section from "./Section";
import { brainwaveSymbol, check } from "../assets";
import Buttons from "./Buttons";
import {LeftCurve, RightCurve} from "./design/Collaboration"
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="" />
                  <h6 className="ml-6 body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4 ml-3">{item.text};</p>
                )}
              </li>
            ))}
          </ul>
          <Buttons>Try it now</Buttons>
        </div>
        
      </div>
    </Section>
  );
};

export default Collaboration;