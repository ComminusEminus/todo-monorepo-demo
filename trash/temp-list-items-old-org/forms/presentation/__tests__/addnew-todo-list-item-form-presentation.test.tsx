
const mockListItemContextDispatch = (state:IMockUIContextState) => {
  const newState = state
  const updateState = (action: IMockAction) => {
      const {type, payload} = action
      switch(type){
          case UIACTIONS.UPDATE_OBSERVERS:
              newState.update = payload
              return newState
      }
  }
  
  return updateState
}

jest.mock('../../api/use-addnew-todo-list-item-api', () => {

  return{
    __esModule: true,
    
    useAddNewTodoListItemApi: jest.fn(() => {
      
      return{
        addNewTodoListItemApiHandler: jest.fn(() => {}),
        addNewTodoListApiState: {
          returnValue: {message: 'ok', error: ''},
          errorMessage: null,
          loading: false
        }
      }
    })
  }
}).mock('@ui/contexts', () => {
  const originalModule = jest.requireActual('@ui/contexts');
  return{
    __esModule: true,
    ...originalModule,
    useUIContext: jest.fn(() => {
      const state = mockUIContextState
      return{
        state: state,
        dispatch: mockListItemContextDispatch(state)
      }
    })
  }
})


interface IMockUserProfile {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
}

const mockUserProfile: IMockUserProfile = {
  _id: "56445645646",
  userName: "John",
  firstName: "Doe",
  lastName: "JJDoe",
}

interface IMockUIContextState{
  formType: string | null
  selectedTodoListItemId: string | null;
  selectedTodoListId : string | null;
  update: string | null;
  userProfile: IMockUserProfile | null
}

const mockUIContextState: IMockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: '5464645654',
    update: null,
    userProfile: {...mockUserProfile},
}

interface IMockAction{
  type: string;
  payload: string;
}

interface ITheme {
  children: JSX.Element | JSX.Element[]
}

interface ITheme {
  children: JSX.Element | JSX.Element[]
}

const Theme = (props: ITheme) => (
  <ThemeProvider theme={BaseTheme}>{props.children}</ThemeProvider>
);


import React from 'react'
import {AddNewTodoListItemFormPresentation} from '../addnew-todo-list-item-form-presentation'; 
import {useAddNewTodoListItemApi} from '../../api/use-addnew-todo-list-item-api'
import {render, screen, waitFor} from "@testing-library/react"
import {describe, expect, test} from '@jest/globals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@design/globalstyle'
import {UIACTIONS} from '@core/entities'
import { BaseTheme } from '@design/basetheme'
import '@testing-library/jest-dom'
import '@ui/contexts'
import userEvent from '@testing-library/user-event'


it("should render the basic fields and submit form without error", async () => {

    render(
      <Theme>
        <GlobalStyle/>
        <AddNewTodoListItemFormPresentation/>
      </Theme>
    );

    const titleInput = screen.getByPlaceholderText('Enter Title')
    const descriptionInput = screen.getByPlaceholderText('Enter Description')
    const submitButton = screen.getByRole('button')

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    
    const user = userEvent.setup()

    await user.type(titleInput, 'Test Title')
    await user.type(descriptionInput, 'Test Description')
    await user.click(submitButton)

});