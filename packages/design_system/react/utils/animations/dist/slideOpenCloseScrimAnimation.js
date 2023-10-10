"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideOpenScrim = exports.slideCloseScrim = void 0;
var _styledComponents = require("styled-components");
const slideOpenScrim = (0, _styledComponents.keyframes)`
  from {
    width: 0vh;
    display: none;
    opacity: 0;
  }
  to {
    width: fit-content;
    display: flex;
    opacity: 1;
  }
`;
exports.slideOpenScrim = slideOpenScrim;
const slideCloseScrim = (0, _styledComponents.keyframes)`
  from {
    width: fit-content;
    display: flex;
    opacity: 1;
  }
  to {
    width: 0vh;
    display: none;
    opacity: 0;
  }
`;
exports.slideCloseScrim = slideCloseScrim;