"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Button = require("./variants/Button.style");
Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key];
    }
  });
});
var _ButtonState = require("./variants/ButtonState.style");
Object.keys(_ButtonState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ButtonState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ButtonState[key];
    }
  });
});
var _OutlineButton = require("./variants/OutlineButton.style");
Object.keys(_OutlineButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OutlineButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OutlineButton[key];
    }
  });
});
var _SvgButton = require("./variants/SvgButton.style");
Object.keys(_SvgButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SvgButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SvgButton[key];
    }
  });
});
var _TextButton = require("./variants/TextButton.style");
Object.keys(_TextButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextButton[key];
    }
  });
});
var _IButtonStateStyleProps = require("./interfaces/IButtonStateStyleProps");
Object.keys(_IButtonStateStyleProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IButtonStateStyleProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IButtonStateStyleProps[key];
    }
  });
});