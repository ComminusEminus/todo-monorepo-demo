import { keyframes } from 'styled-components';
export const animateOut = keyframes `
  from {

    transform: translate(0%);
  }
  to {

    transform: translate(-100vh)
  }
`;
export const animateIn = keyframes `
  from {

    transform: translate(-100vh)
  }
  to {

    transform: translate(0)
  }
`;
//# sourceMappingURL=outInAnimation.js.map