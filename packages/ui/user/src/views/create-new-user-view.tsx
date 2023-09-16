import React from 'react'
import {useTheme} from 'styled-components'
import {CreateUserPresentation} from '../forms/index'
import {LoginUserContainer} from '../components/login-user-container'
import {CreateUserPageButton} from '../components/create-user-page-button'
export interface ICreateNewUserView{
    pageDisplayHandler: () => void;
}

export const CreateNewUserView = ({pageDisplayHandler}: ICreateNewUserView) => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <CreateUserPresentation pageDisplayHandler = {pageDisplayHandler} />
            <CreateUserPageButton pageDisplayHandler = {pageDisplayHandler} />
        </LoginUserContainer>
    )
}