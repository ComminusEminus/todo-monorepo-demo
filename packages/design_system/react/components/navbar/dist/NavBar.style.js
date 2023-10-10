"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _container = require("@design/container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBarStyle = (0, _styledComponents.default)(_container.ContainerStyle)`
    position: absolute;
    height: auto;
    z-index: 4000;
    left: 0px;
    right: 0px;
    justify-content: ${props => props.justifyContent || 'stretch'};
    align-items: ${props => props.alignItems || 'stretch'};
    box-shadow: ${props => props.elevation || props.theme.shadow.sm};
    top: 0px;
`;
exports.NavBarStyle = NavBarStyle;