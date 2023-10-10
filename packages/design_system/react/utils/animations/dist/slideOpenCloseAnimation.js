"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideOpen = exports.slideClose = void 0;
var _styledComponents = require("styled-components");
const slideOpen = (0, _styledComponents.keyframes)`
  from {
    display: none;
    width: 0vh;
    & > div {
      opacity: 0;
      display: none;
    }
  }
  to {
    width: 40vh;
    & > div {
      opacity: 1;
      display: inline-flex;
    }
  }
`;
exports.slideOpen = slideOpen;
const slideClose = (0, _styledComponents.keyframes)`
  from {
    width: 40vh;
    & > div {
      opacity: 1;
      display: inline-flex;
    }
  }
  to {
    width: 0vh;
    display: none;
    & > div {
      opacity: 0;
      display: none;
    }
  }
`;
exports.slideClose = slideClose;