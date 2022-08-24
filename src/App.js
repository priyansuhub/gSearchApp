import React, { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Rout } from "./components/Rout";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Rout />
        <Footer />
      </div>
    </div>
  );
}

export default App;
