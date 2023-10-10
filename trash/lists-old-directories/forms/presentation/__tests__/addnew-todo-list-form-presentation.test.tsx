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

interface IMockUIContextState {
    formType: string | null
    selectedTodoListItemId: string | null;
    selectedTodoListId: string | null;
    update: string | null;
    userProfile: IMockUserProfile | null
}

const mockUIContextState: IMockUIContextState = {
    formType: null,
    selectedTodoListItemId: null,
    selectedTodoListId: '5464645654',
    update: null,
    userProfile: { ...mockUserProfile },
}

interface IMockAction {
    type: string;
    payload: string;
}


const mockListContextDispatch = (state: IMockUIContextState) => {
    const newState = state
    const updateState = (action: IMockAction) => {
        const { type, payload } = action
        switch (type) {
            case UIACTIONS.UPDATE_OBSERVERS:
                newState.update = payload
                return newState
        }
    }

    return updateState
}

jest.mock('../../api/use-add-new-todo-list-api', () => {

    return {
        __esModule: true,

        useAddNewTodoListApi: jest.fn(() => {

            return {
                addNewTodoListApiHandler: jest.fn(() => { }),
                addNewListApiState: {
                    returnValue: { message: 'ok', error: '' },
                    errorMessage: null,
                    loading: false
                }
            }
        })
    }
}).mock('@ui/contexts', () => {
    const originalModule = jest.requireActual('@ui/contexts');
    return {
        __esModule: true,
        ...originalModule,
        useUIContext: jest.fn(() => {
            const state = mockUIContextState
            return {
                state: state,
                dispatch: mockListContextDispatch(state)
            }
        })
    }
})


interface ITheme {
    children: JSX.Element | JSX.Element[]
}

const Theme = (props: ITheme) => (
    <ThemeProvider theme={BaseTheme}>{props.children}</ThemeProvider>
);

import React from 'react'
import '../../api/use-add-new-todo-list-api'
import { AddNewTodoListFormPresentation } from '../addnew-todo-list-form-presentation'
import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, test } from '@jest/globals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@design/globalstyle'
import { UIACTIONS } from '@core/entities'
import { BaseTheme } from '@design/basetheme'
import '@testing-library/jest-dom'
import '@ui/contexts'
import userEvent from '@testing-library/user-event'


it("should render the basic fields and submit form without error", async () => {

    render(
      <Theme>
        <GlobalStyle/>
        <AddNewTodoListFormPresentation/>
      </Theme>
    );

    const titleInput = screen.getByPlaceholderText('Enter Title')
    const submitButton = screen.getByRole('button')

    expect(titleInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    
    const user = userEvent.setup()

    await user.type(titleInput, 'Test Title')
    await user.click(submitButton)

});