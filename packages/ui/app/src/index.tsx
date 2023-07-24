import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@design/buttons'
import { UIProvider } from '@ui/contexts'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@design/globalstyle'
import { BaseTheme } from '@design/basetheme'

import { EntryPoint } from '@ui/pages';
import {AddNewTodoListItemForm} from '@ui/todo-list'
import {ITodoListItemDescription, ListItemStatus} from '@core/entities'

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

interface ITheme {
  children: JSX.Element | JSX.Element[]
}

const Theme = (props: ITheme) => (
  <ThemeProvider theme={BaseTheme}>{props.children}</ThemeProvider>
);
const testItem: ITodoListItemDescription = {
  id: '243423',
  title: "test item",
  complete: ListItemStatus.COMPLETED
}


root.render(
  <StrictMode>
    <Theme>
      <GlobalStyle />
      <UIProvider>
        <EntryPoint />
      </UIProvider>
    </Theme>
  </StrictMode>,
);