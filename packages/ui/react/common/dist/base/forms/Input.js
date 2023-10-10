"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
var _forms = require("@design/forms");
var _Label = require("./Label");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Input = function Input(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Label.Label, {
    htmlFor: props.id,
    labelText: props.name
  }), /*#__PURE__*/_react["default"].createElement(_forms.InputStyle, _extends({
    type: props.type,
    id: props.id,
    name: props.name,
    required: props.required || false,
    minLength: props.minLength,
    maxLength: props.maxLength,
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange
  }, props.register(props.name))), props.error && /*#__PURE__*/_react["default"].createElement("span", null, props.error));
};
exports.Input = Input;