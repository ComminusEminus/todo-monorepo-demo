"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetStyle = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BottomSheetStyle = _styledComponents.default.div`
    background: ${props => props.background || props.theme.colors.neutral.surfaceLow};   
    box-shadow: 0px -10px 15px -10px hsl(0deg 0% 0% / 0.30);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
`;
exports.BottomSheetStyle = BottomSheetStyle;