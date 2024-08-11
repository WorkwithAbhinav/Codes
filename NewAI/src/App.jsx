import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Naam() {
  return "About";
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [msgAlert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Navbar
        title="Change Text"
        about={<Naam />}
        darkMode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert msgAlert={msgAlert} />
      <div className="container p-5">
        <Route path="/" element={<TextForms />} />
        <Route path="/About" element={<About />} />
      </div>
    </Router>
  );
}

export default App;
