import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight (props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if(theme == "light") {
      setTheme("dark");
    } else if(theme == "dark"){
      setTheme("light");
    }
  },[theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {/* 이렇게 provider로 감싸진 칠드런에서 해당 context값을 참조할 수 있게된다. */}
      <MainContent/>
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
