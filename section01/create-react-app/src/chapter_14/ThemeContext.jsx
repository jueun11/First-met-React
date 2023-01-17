import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemContext";
//개발자도구에서 ThemContext의 이름 ""내용으로 출력댐
//초기값을 설정하지않았고, 이따 프로바이더에서 설정할거임

export default ThemeContext;