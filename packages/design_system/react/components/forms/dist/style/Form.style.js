"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FormStyle = _styledComponents.default.form`
    display: inline-flex;
    padding: 0px;
    width: 100%;
    box-sizing: border-box;
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: stretch;
    align-items: stretch;
    gap: ${props => props.theme.space.sm};
`;
exports.FormStyle = FormStyle;