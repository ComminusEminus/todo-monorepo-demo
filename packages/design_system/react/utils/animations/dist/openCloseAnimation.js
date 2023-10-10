"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openAnimation = exports.closeAnimation = void 0;
var _styledComponents = require("styled-components");
const openAnimation = (0, _styledComponents.keyframes)`
  from {
    height: 20vh;
  }
  to {
    height: 80vh;
  }
`;
exports.openAnimation = openAnimation;
const closeAnimation = (0, _styledComponents.keyframes)`
  from {
    height: 80vh;
  }
  to {
    height: 20vh;
  }
`;
exports.closeAnimation = closeAnimation;