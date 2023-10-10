"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextStyle = _styledComponents.default.div`
    margin:0;
    color: ${props => props.color || props.theme.colors.neutral.onBackground};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
`;
exports.TextStyle = TextStyle;