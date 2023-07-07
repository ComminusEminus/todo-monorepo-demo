import { keyframes } from 'styled-components';
export const slideOpenScrim = keyframes `
  from {
    width: 0vh;
    display: none;
    opacity: 0;
  }
  to {
    width: fit-content;
    display: flex;
    opacity: 1;
  }
`;
export const slideCloseScrim = keyframes `
  from {
    width: fit-content;
    display: flex;
    opacity: 1;
  }
  to {
    width: 0vh;
    display: none;
    opacity: 0;
  }
`;
//# sourceMappingURL=slideOpenCloseScrimAnimation.js.map