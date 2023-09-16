"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ButtonStyle: true,
  ButtonStateStyle: true,
  OutlineButtonStyle: true,
  SvgButtonStyle: true,
  TextButtonStyle: true
};
Object.defineProperty(exports, "ButtonStateStyle", {
  enumerable: true,
  get: function () {
    return _ButtonState2.ButtonStateStyle;
  }
});
Object.defineProperty(exports, "ButtonStyle", {
  enumerable: true,
  get: function () {
    return _Button2.ButtonStyle;
  }
});
Object.defineProperty(exports, "OutlineButtonStyle", {
  enumerable: true,
  get: function () {
    return _OutlineButton2.OutlineButtonStyle;
  }
});
Object.defineProperty(exports, "SvgButtonStyle", {
  enumerable: true,
  get: function () {
    return _SvgButton2.SvgButtonStyle;
  }
});
Object.defineProperty(exports, "TextButtonStyle", {
  enumerable: true,
  get: function () {
    return _TextButton2.TextButtonStyle;
  }
});
var _Button = require("./presentation/Button");
Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key];
    }
  });
});
var _OutlineButton = require("./presentation/OutlineButton");
Object.keys(_OutlineButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OutlineButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _OutlineButton[key];
    }
  });
});
var _SvgButton = require("./presentation/SvgButton");
Object.keys(_SvgButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SvgButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SvgButton[key];
    }
  });
});
var _TextButton = require("./presentation/TextButton");
Object.keys(_TextButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TextButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TextButton[key];
    }
  });
});
var _IButtonProps = require("./interfaces/IButtonProps");
Object.keys(_IButtonProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IButtonProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IButtonProps[key];
    }
  });
});
var _IButtonStateProps = require("./interfaces/IButtonStateProps");
Object.keys(_IButtonStateProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IButtonStateProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IButtonStateProps[key];
    }
  });
});
var _IButtonStateStyleProps = require("./interfaces/IButtonStateStyleProps");
Object.keys(_IButtonStateStyleProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IButtonStateStyleProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IButtonStateStyleProps[key];
    }
  });
});
var _IButtonStyleProps = require("./interfaces/IButtonStyleProps");
Object.keys(_IButtonStyleProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IButtonStyleProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IButtonStyleProps[key];
    }
  });
});
var _ButtonState = require("./state-wrapper/ButtonState");
Object.keys(_ButtonState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ButtonState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ButtonState[key];
    }
  });
});
var _Button2 = require("./style/Button.style");
var _ButtonState2 = require("./style/ButtonState.style");
var _OutlineButton2 = require("./style/OutlineButton.style");
var _SvgButton2 = require("./style/SvgButton.style");
var _TextButton2 = require("./style/TextButton.style");