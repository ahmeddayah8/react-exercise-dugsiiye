import { useState } from "react";
import Translate from "./Translate";
import { TranslatedComponent } from "./TranslatedComponent";

function App() {
  const [language, setLanguage] = useState("English");

  const handleToggle = () => {
    setLanguage((prev) => (prev === "English" ? "Spanish" : "English"));
  };
  return (
    <Translate.Provider value={language}>
      <button onClick={handleToggle}>
        {language === "English" ? "Switch to Spanish" : "Switch to English"}
      </button>
      <TranslatedComponent />
    </Translate.Provider>
  );
}

export default App;
