import React from 'react'
import {useTheme} from 'styled-components'
import {LoginUserPresentation} from '../forms/index'
import {LoginUserContainer} from '../components/containers/login-user-container'
import {CreateUserPageButton} from '../components/buttons/create-user-page-button'
export interface ILoginView{
    pageSwitchHandler: () => void;

}

export const LoginView = ({pageSwitchHandler}: ILoginView) => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <LoginUserPresentation />
            <CreateUserPageButton pageSwitchHandler = {pageSwitchHandler} />
        </LoginUserContainer>
    )
}