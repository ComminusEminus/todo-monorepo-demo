"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseTheme = void 0;
var _colors = require("./colors");
var _space = require("./space");
var _borderRadius = require("./borderRadius");
var _shadow = require("./shadow");
var _breakpoints = require("./breakpoints");
var _opacityState = require("./opacityState");
const BaseTheme = {
  colors: _colors.colors,
  space: _space.space,
  borderRadius: _borderRadius.borderRadius,
  shadow: _shadow.shadow,
  breakpoints: _breakpoints.breakpoints,
  opacityState: _opacityState.opacityState
};
exports.BaseTheme = BaseTheme;