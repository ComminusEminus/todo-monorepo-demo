"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItemAnimation = void 0;
var _styledComponents = require("styled-components");
const deleteItemAnimation = (0, _styledComponents.keyframes)`
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
`;
exports.deleteItemAnimation = deleteItemAnimation;