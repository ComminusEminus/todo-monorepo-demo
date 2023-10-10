"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animatePageOut = exports.animatePageIn = void 0;
var _styledComponents = require("styled-components");
const animatePageOut = (0, _styledComponents.keyframes)`
  from {

    transform: translate(0%);
    
  }
  to {

    transform: translate(100vh)
  }
`;
exports.animatePageOut = animatePageOut;
const animatePageIn = (0, _styledComponents.keyframes)`
  from {
    transform: translate(100vh)
  }
  to {
    
    transform: translate(0)
  }
`;
exports.animatePageIn = animatePageIn;