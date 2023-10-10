"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateOut = exports.animateIn = void 0;
var _styledComponents = require("styled-components");
const animateOut = (0, _styledComponents.keyframes)`
  from {

    transform: translate(0%);
  }
  to {

    transform: translate(-100vh)
  }
`;
exports.animateOut = animateOut;
const animateIn = (0, _styledComponents.keyframes)`
  from {

    transform: translate(-100vh)
  }
  to {

    transform: translate(0)
  }
`;
exports.animateIn = animateIn;