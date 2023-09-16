interface IMockUserProfile {
    _id: string | null;
    userName: string | null;
    firstName: string | null;
    lastName: string | null;
}

const mockUserProfile: IMockUserProfile = {
    _id: null,
    userName: null,
    firstName: null,
    lastName: null,
}

const mockUserProfileResponse: IMockUserProfile = {
    _id: "56445645646",
    userName: "John",
    firstName: "Doe",
    lastName: "JJDoe",
}

const tokenResponse = '65565fdsfds'

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
    selectedTodoListId: null,
    update: null,
    userProfile: null,
}

interface IMockAction {
    type: string;
    payload: IMappedUserProfile;
}

const mockListContextDispatch = (state: IMockUIContextState) => {
    const newState = state
    const updateState = (action: IMockAction) => {
        const { type, payload } = action
        switch (type) {
            case UIACTIONS.UPDATE_USER_PROFILE:
                newState.userProfile = payload
                return newState
        }
    }

    return updateState
}

jest.mock('../../api/use-login-user-api', () => {

    return {
        __esModule: true,

        useLoginUserApi: jest.fn(() => {

            return {
                loginApiHandler: jest.fn(() => { }),
                requestState: {
                    returnValue: { 
                        user: mockUserProfileResponse, 
                        token: tokenResponse, 
                        message: undefined, 
                        error: undefined 
                    },
                    error: null,
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
import '../../api/use-login-user-api'
import {LoginUserPresentation} from '../login-user-presentation'
import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, test } from '@jest/globals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@design/globalstyle'
import { UIACTIONS, IMappedUserProfile } from '@core/entities'
import { BaseTheme } from '@design/basetheme'
import '@testing-library/jest-dom'
import '@ui/contexts'
import userEvent from '@testing-library/user-event'

it("should render the basic fields and submit form without error", async () => {

    render(
      <Theme>
        <GlobalStyle/>
        <LoginUserPresentation/>
      </Theme>
    );

    const userNameInput = screen.getByPlaceholderText('Enter Username')
    const passwordInput = screen.getByPlaceholderText('Enter Password')
    const submitButton = screen.getByRole('button')

    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    const user = userEvent.setup()

    await user.type(userNameInput, 'JJDoe')
    await user.type(passwordInput, 'Password')
    
    await user.click(submitButton)
})