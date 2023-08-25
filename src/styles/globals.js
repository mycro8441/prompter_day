import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
html, body {
  top:0;
  left: 0;
  width:100vw;
  height:100vh;
  padding:0;
  margin:0;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  user-select: none;
  font-family: Pretendard, "Noto Sans KR", sans-serif;
  text-decoration: none;
}


`;


export default GlobalStyle;
