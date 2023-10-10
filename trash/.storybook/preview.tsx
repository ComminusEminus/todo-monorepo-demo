import React from 'react'
import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@design/globalstyle'
import { BaseTheme } from '@design/basetheme'
import {TypographyStyle} from '@design/typeography'
interface ITheme {
  children: JSX.Element | JSX.Element[]
}

const Theme = (props: ITheme) => (
  <ThemeProvider theme={BaseTheme}>{props.children}</ThemeProvider>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
      <GlobalStyle />
      <TypographyStyle />
        <Story />
      </Theme>

    )
  ]
};

export default preview;
/*

parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
*/