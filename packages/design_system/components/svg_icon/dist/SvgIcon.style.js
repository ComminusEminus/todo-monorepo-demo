"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgIconStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SvgIconStyle = _styledComponents.default.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})`
    height: ${props => props.height};
    width: ${props => props.width};
  `;
exports.SvgIconStyle = SvgIconStyle;