import { keyframes } from 'styled-components';
export const slideOpen = keyframes `
  from {
    display: none;
    width: 0vh;
    & > div {
      opacity: 0;
      display: none;
    }
  }
  to {
    width: 40vh;
    & > div {
      opacity: 1;
      display: inline-flex;
    }
  }
`;
export const slideClose = keyframes `
  from {
    width: 40vh;
    & > div {
      opacity: 1;
      display: inline-flex;
    }
  }
  to {
    width: 0vh;
    display: none;
    & > div {
      opacity: 0;
      display: none;
    }
  }
`;
//# sourceMappingURL=slideOpenCloseAnimation.js.map