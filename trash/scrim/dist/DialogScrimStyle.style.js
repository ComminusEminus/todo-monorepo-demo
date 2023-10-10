"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogScrimStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Scrim = require("./Scrim.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DialogScrimStyle = (0, _styledComponents.default)(_Scrim.DefaultScrimStyle)`
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    justify-content: center;
    align-items: center;
    background: ${props => props.background || props.theme.colors.neutral.scrim};
`;
exports.DialogScrimStyle = DialogScrimStyle;