import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@design/globalstyle'
import { BaseTheme } from '@design/basetheme'
import {TypographyStyle} from '@design/typeography'

import { UIProvider } from '@reactui/contexts'
import { EntryPoint } from '@reactui/entry-point';




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