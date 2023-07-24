"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.TextButton = exports.SvgButton = exports.OutlineButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonState = require("./ButtonState");
var _Button = require("./Button.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//-----------------Button Interface

//------------------Button

const ButtonBase = props => {
  return /*#__PURE__*/_react.default.createElement(_Button.ButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    buttonStyle: props.buttonStyle,
    display: props.display,
    color: props.color,
    value: props.value
  }, props.children);
};
function Button(props) {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(ButtonBase, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    buttonStyle: props.buttonStyle,
    display: props.display,
    color: props.color
  }, props.text));
}

//--------------------OutlineButton

const OutlineButtonBase = props => {
  return /*#__PURE__*/_react.default.createElement(_Button.OutlineButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    buttonStyle: props.buttonStyle,
    display: props.display,
    color: props.color
  }, props.children);
};
const OutlineButton = props => {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(OutlineButtonBase, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    display: props.display,
    color: props.color
  }, props.text));
};

//---------------TextButton
exports.OutlineButton = OutlineButton;
const TextButtonBase = props => {
  return /*#__PURE__*/_react.default.createElement(_Button.TextButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    buttonStyle: props.buttonStyle,
    display: props.display,
    color: props.color
  }, props.children);
};
const TextButton = props => {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(_Button.TextButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    display: props.display,
    color: props.color
  }, props.text));
};

//---------------------SVGButton
exports.TextButton = TextButton;
const SVGButtonBase = props => {
  return /*#__PURE__*/_react.default.createElement(_Button.SvgButtonStyle, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    buttonStyle: props.buttonStyle,
    display: props.display,
    color: props.color
  }, props.children);
};
const SvgButton = props => {
  return /*#__PURE__*/_react.default.createElement(_ButtonState.ButtonState, {
    mt: props.mt,
    mb: props.mb,
    ml: props.ml,
    mr: props.mr,
    borderRadius: props.borderRadius,
    elevation: props.elevation,
    buttonStateWidth: props.buttonStateWidth
  }, /*#__PURE__*/_react.default.createElement(SVGButtonBase, {
    type: props.type,
    onClick: props.onClick,
    size: props.size,
    width: props.width,
    display: props.display,
    color: props.color,
    children: props.children
  }));
};
exports.SvgButton = SvgButton;