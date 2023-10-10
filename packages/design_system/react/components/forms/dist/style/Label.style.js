"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LabelStyle = _styledComponents.default.label`
    font-family: 'Barlow';
    position: relative;
    top: 16px;
    left: 10px;
    font-size: ${8 + 2}px;
    letter-spacing: 1px;
    align-self: flex-start;
    color: ${props => props.theme.colors.neutral.onSurface};
`;
exports.LabelStyle = LabelStyle;