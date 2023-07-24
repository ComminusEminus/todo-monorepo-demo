"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;
const colors = {
  primary: {
    base: 'rgba(0, 105, 107, 1)',
    onBase: '#ffffff',
    baseContainer: '#47f9fc',
    onBaseContainer: '#002020',
    baseHover: 'rgba(0, 105, 107, .8)',
    baseFocus: 'rgba(0, 105, 107, .2)',
    baseDisabled: 'rgba(0, 105, 107, .2)'
  },
  secondary: {
    base: 'rgba(0, 104, 123, 1)',
    onBase: '#ffffff',
    baseContainer: '#afecff',
    onBaseContainer: ' #001f27',
    baseHover: 'rgba(0, 104, 123, .8)',
    baseFocus: 'rgba(0, 104, 123, .2)',
    baseDisabled: 'rgba(0, 104, 123, .2)'
  },
  tertiary: {
    base: 'rgba(76, 95, 124, 1)',
    onBase: '#ffffff',
    baseContainer: '#d4e3ff',
    onBaseContainer: '#051c35',
    baseHover: 'rgba(76, 95, 124, .8)',
    baseFocus: 'rgba(76, 95, 124, .2)',
    baseDisabled: 'rgba(0, 105, 107, .2)'
  },
  neutral: {
    background: ' #fafdfc',
    onBackground: '#191c1c',
    surface: '#fafdfc',
    surfaceHigh: '#fcfffe',
    surfaceLow: '#e0e2e2',
    //-10% from surface
    onSurface: '#191c1c',
    surfaceVariant: '#dae4e4',
    onSurfaceVariant: '#3f4949',
    outline: '#6f7979',
    scrim: 'rgba(0, 0, 0, .25)'
  },
  inverse: {
    inverseSurface: '',
    inverseOnSurface: '',
    inversePrimary: ''
  },
  semantic: {
    success: 'rgba(122, 211, 112, 1)',
    successHover: 'rgba(122, 211, 112, .15)',
    successFocus: 'rgba(122, 211, 112, .35)',
    onSuccress: '',
    warning: '',
    onWarning: '',
    error: 'rgba(252, 65, 74, 1)',
    errorHover: 'rgba(252, 65, 74, .15)',
    errorFocus: 'rgba(252, 65, 74, .35)',
    onError: 'ba1a1a',
    info: '',
    onInfo: '',
    disabled: '',
    onDisabled: ''
  }
};
exports.colors = colors;