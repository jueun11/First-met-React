import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <p>이해가 잘 안됩니다 큰일났습니다. 어렵습니다</p>
      <button onClick={toggleTheme}>테마변경</button>
    </div>
  );
}

export default MainContent;