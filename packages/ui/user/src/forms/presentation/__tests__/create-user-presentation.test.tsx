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

jest.mock('../../api/use-create-new-user-profile-api', () => {

    return {
        __esModule: true,

        useCreateNewUserProfileApi: jest.fn(() => {

            return {
                createNewUserApiHandler: jest.fn(() => { }),
                requestState: {
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
import '../../api/use-create-new-user-profile-api'
import { CreateUserPresentation } from '../create-user-presentation'
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
        <CreateUserPresentation/>
      </Theme>
    );

    
    
    const firstNameInput = screen.getByPlaceholderText('Enter First Name')
    const lastNameInput = screen.getByPlaceholderText('Enter Last Name')
    const userNameInput = screen.getByPlaceholderText('Enter Username')
    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const submitButton = screen.getByRole('button')

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(submitButton).toBeInTheDocument();
    
    const user = userEvent.setup()

    await user.type(firstNameInput, 'John')
    await user.type(lastNameInput, 'Doe')
    await user.type(userNameInput, 'JDoe')
    await user.type(passwordInput, 'password')
    
    await user.click(submitButton)

});