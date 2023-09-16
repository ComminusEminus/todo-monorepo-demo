"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButtonStyle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Button = require("./Button.style");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TextButtonStyle = (0, _styledComponents.default)(_Button.ButtonStyle)`
    background: transparent;
    border: none;
    width: ${props => props.width};
    color: ${props => props.theme.colors.neutral.onBackground};
    ${props => {
  if (props.size === 'lg') {
    return (0, _styledComponents.css)`
                        padding: calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 15rem);
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + 1rem);
                    `;
  } else if (props.size === 'sm') {
    return (0, _styledComponents.css)`
                        padding: calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 10rem);
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + .3rem);
                    `;
  } else {
    return (0, _styledComponents.css)`
                        padding-top: ${props.pt || 0};
                        padding-bottom: ${props.pb || 0};
                        padding-left: ${props.pl || 0};
                        padding-right: ${props.pr || 0};
                    `;
  }
}}
`;
exports.TextButtonStyle = TextButtonStyle;