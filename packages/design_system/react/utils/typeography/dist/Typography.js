"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypographyStyle = void 0;
var _styledComponents = require("styled-components");
var _AlbertSans_Bold = _interopRequireDefault(require("../fonts/Albert_Sans/AlbertSans_Bold.ttf"));
var _Barlow_ExtraLight = _interopRequireDefault(require("../fonts/Barlow/Barlow_ExtraLight.ttf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TypographyStyle = (0, _styledComponents.createGlobalStyle)`
    @font-face{
        font-family: 'Albert_Sans';
        src: url(${_AlbertSans_Bold.default})format('truetype');
    };
    @font-face{
        font-family: 'Barlow';
        src: url(${_Barlow_ExtraLight.default}) format('truetype');
    }
`;
exports.TypographyStyle = TypographyStyle;