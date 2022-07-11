import React, { useState } from "react";
import { Theme_Colorful } from "../colors";

export const ThemeContext = React.createContext();

export const ThemeContextComp = ({ children }) => {
  const [theme, setTheme] = useState(Theme_Colorful);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
