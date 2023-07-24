import React from 'react';
import { SvgIconStyle } from './SvgIcon.style';
export const SvgIcon = props => {
  return /*#__PURE__*/React.createElement(SvgIconStyle, {
    viewBox: props.viewBox,
    width: props.width,
    height: props.height
  }, /*#__PURE__*/React.createElement("path", {
    d: props.path,
    fill: props.fill
  }));
};