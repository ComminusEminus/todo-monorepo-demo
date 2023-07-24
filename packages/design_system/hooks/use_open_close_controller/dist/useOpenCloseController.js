"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenCloseController = void 0;
var _react = require("react");
const useOpenCloseController = () => {
  const [sheetState, setSheetState] = (0, _react.useState)('loaded');
  const [animateState, setAnimateState] = (0, _react.useState)('static');
  const sheetHandler = () => {
    console.log('sheetHandler');
    if (sheetState === 'loaded') {
      setAnimateState('animateOpen');
      console.log('animateState: animateOpen');
    } else if (sheetState === 'opened') {
      setAnimateState('animateClose');
      console.log('animateState: animateClose');
    } else if (sheetState === 'closed') {
      setAnimateState('animateOpen');
      console.log('animateState: animateOpen');
    }
  };
  (0, _react.useEffect)(() => {
    if (animateState === 'animateOpen') {
      setSheetState('opened');
    } else if (animateState === 'animateClose') {
      setSheetState('closed');
    }
  }, [animateState]);
  return {
    sheetHandler,
    animateState
  };
};
exports.useOpenCloseController = useOpenCloseController;