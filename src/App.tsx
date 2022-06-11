import React, { useState } from "react";
import { HeroSlider, Info, Navbar } from "./components";

function App() {
  const [language, setLanguage] = useState<string>("GR");
  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSlider />
      <Info language={language} />
    </div>
  );
}

export default App;
