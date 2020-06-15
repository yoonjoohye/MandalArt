import {createGlobalStyle} from "styled-components";
import {Color} from "./Theme.style";

export const Global = createGlobalStyle`
  html {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    
    @font-face {
      font-family: "NanumSquare";
      src: url(../font/NanumSquareL.eot);
      src: url(../font/NanumSquareL.eot#iefix) format('embedded-opentype'),
      url(../font/NanumSquareL.woff) format('woff'),
      url(../font/NanumSquareL.ttf) format('truetype');
    }
    
    body {
      width: 100%;
      margin: 0;
      font-family: 'NanumSquare', sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
      color: ${Color.gray500};
      @media(max-width: 480px) {
        font-size: 13px;
      }
    }
    
    textarea {
      font-family: 'NanumSquare', sans-serif;
      font-weight:300;
    }
    
    input {
      font-family: 'NanumSquare', sans-serif;
      font-weight:300;
      &::placeholder{
         font-weight:300;
      }
    }
    
    li {
      padding-left: 15px;
      list-style: none;
    }
    
    ol, ul {
      margin: 0;
      padding-left: 20px;
    }
    
    a {
      text-decoration: none;
      color: black;
    }
    
    p {
      line-height: 1.8;
      margin: 0;
    }
`;