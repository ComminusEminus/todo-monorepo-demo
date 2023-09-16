import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UIProvider, UserLoginProvider } from '@ui/contexts'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@design/globalstyle'
import { BaseTheme } from '@design/basetheme'
import { EntryPoint } from '@ui/pages';
import {TypographyStyle} from '@design/typeography'

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

interface ITheme {
  children: JSX.Element | JSX.Element[]
}

const Theme = (props: ITheme) => (
  <ThemeProvider theme={BaseTheme}>{props.children}</ThemeProvider>
);

root.render(
  <StrictMode>
    <Theme>
      <TypographyStyle />
      <GlobalStyle />
      <UIProvider>
        <EntryPoint />
      </UIProvider>
    </Theme>
  </StrictMode>,
);