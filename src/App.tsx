import React, { useState } from "react";
import { HeroSlider, Navbar } from "./components";

function App() {
  const [language, setLanguage] = useState<string>("");
  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSlider />
    </div>
  );
}

export default App;
