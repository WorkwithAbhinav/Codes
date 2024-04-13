import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Buttons from "./Buttons";
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from "react";
import { disablePageScroll } from "scroll-lock";
import { enablePageScroll } from "scroll-lock";

import React from 'react'

const Header = () => {
  return (
    <div>
      This is heading
    </div>
  )
}

export default Header
