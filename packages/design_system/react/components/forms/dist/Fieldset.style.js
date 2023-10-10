"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsetStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FieldsetStyle = _styledComponents.default.fieldset`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    border: none;
`;
exports.FieldsetStyle = FieldsetStyle;