import React from 'react'
import {useTheme} from 'styled-components'
import {LoginUserPresentation} from '../forms/index'
import {LoginUserContainer} from '../components/login-user-container'
import {CreateUserPageButton} from '../components/create-user-page-button'
export interface ILoginView{
    pageDisplayHandler: () => void;

}

export const LoginView = ({pageDisplayHandler}: ILoginView) => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <LoginUserPresentation />
            <CreateUserPageButton pageDisplayHandler = {pageDisplayHandler} />
        </LoginUserContainer>
    )
}