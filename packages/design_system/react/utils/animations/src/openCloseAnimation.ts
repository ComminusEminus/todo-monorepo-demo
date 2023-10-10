import {keyframes} from 'styled-components'

export const openAnimation = keyframes`
  from {
    height: 20vh;
  }
  to {
    height: 80vh;
  }
`
export const closeAnimation = keyframes`
  from {
    height: 80vh;
  }
  to {
    height: 20vh;
  }
`
