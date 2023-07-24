"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormDisplay = void 0;
var _contexts = require("@ui/contexts");
var useFormDisplay = function useFormDisplay() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    formsState = _useUIContext.formsState;
  return {
    formsState: formsState
  };
};
exports.useFormDisplay = useFormDisplay;