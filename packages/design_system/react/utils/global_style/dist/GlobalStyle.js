"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;
var _styledComponents = require("styled-components");
var _basetheme = require("@design/basetheme");
const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
  html, body {
    background: ${_basetheme.colors.neutral.background};
    color: ${_basetheme.colors.neutral.onBackground};
    font-size: ${_basetheme.space.xs};
    margin:0;
    height: 100vh;
    width: 100vw;
  }

  
`;
exports.GlobalStyle = GlobalStyle;