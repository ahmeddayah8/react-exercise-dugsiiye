import React, { useContext } from "react";
import Translate from "./Translate";

export const TranslatedComponent = () => {
  const language = useContext(Translate);
  return (
    <div>
      <p>{language === "English" ? "Hello" : "Hola"}</p>
    </div>
  );
};
