import { keyframes } from 'styled-components';
export const animatePageOut = keyframes `
  from {

    transform: translate(0%);
    
  }
  to {

    transform: translate(100vh)
  }
`;
export const animatePageIn = keyframes `
  from {
    transform: translate(100vh)
  }
  to {
    
    transform: translate(0)
  }
`;
//# sourceMappingURL=pageChangeAnimation.js.map