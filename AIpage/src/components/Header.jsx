import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Buttons from "./Buttons";
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from "react";
import { disablePageScroll } from "scroll-lock";
import { enablePageScroll } from "scroll-lock";

const Header = () => {

    return (
      <div className={`fixed z-50 top-0 left-0 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNev} ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'`}>
        <div className="flex items-center px-5 lg:px-5 xl:px-10 max-lg:py-4 ">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="" />
          </a>
          <nav className={` ${!openNev ?"hidden" : "flex" } fixed top-[5rem] right-0 bottom-0 left-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
            <div className="flex relative z-2 flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handelclick}
                  className={`block relative font-code text-2xl uppercase px-6 py-6 text-n-1 hover:text-color-1 transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } lg:text-xs font-semibold ${
                    item.url === currpath.hash
                      ? "z-2 lg:text-n-1 "
                      : "lg : text-n-1/50"
                  } xl:px-12 lg:leading-5 lg:hover:text-n-1`}
                >
                  {item.title}
                </a>
              ))}
            </div>
              <HamburgerMenu/>
          </nav>
          <a
            href="#signup"
            className="button hidden lg:block text-n-1/50 mr-8 transition-colors hover:text-n-1"
          >
            New Account
          </a>
          <Buttons className="hidden lg:flex " href="#login">
            Log in
          </Buttons>
          <Buttons className="ml-auto lg:hidden" px="px-3" onClick={togglefx}>
              <MenuSvg openNavigation = {openNev}/>
          </Buttons>
        </div>
      </div>
    );
  };
  
  export default Header;