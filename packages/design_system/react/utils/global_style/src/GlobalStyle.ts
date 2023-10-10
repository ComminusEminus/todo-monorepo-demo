import {createGlobalStyle } from 'styled-components'
import {colors, space} from '@design/basetheme'

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${colors.neutral.background};
    color: ${colors.neutral.onBackground};
    font-size: ${space.xs};
    margin:0;
    height: 100vh;
    width: 100vw;
  }

  
`