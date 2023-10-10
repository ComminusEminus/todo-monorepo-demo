import React from 'react'
import {useTheme} from 'styled-components'
import {CreateUserPresentation} from '../forms/index'
import {LoginUserContainer} from '../components/containers/login-user-container'
import {CreateUserPageButton} from '../components/buttons/create-user-page-button'

export interface ICreateNewUserView{
    pageSwitchHandler: () => void;
}

export const CreateNewUserView = ({pageSwitchHandler}: ICreateNewUserView) => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <CreateUserPresentation pageSwitchHandler = {pageSwitchHandler} />
            <CreateUserPageButton pageSwitchHandler = {pageSwitchHandler} />
        </LoginUserContainer>
    )
}