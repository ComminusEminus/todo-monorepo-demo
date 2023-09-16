import React from 'react'
import {useTheme} from 'styled-components'
import {useSwitchPage} from '../hooks/ui-interactions/use-switch-page'
import {CreateNewUserView} from './create-new-user-view'
import {LoginView} from './login-view'

export const UserView = () => {
    const {pageDisplay, pageDisplayHandler} = useSwitchPage()
    
    if(pageDisplay === 'LOGIN_PAGE'){
        return(
            <LoginView pageDisplayHandler = {pageDisplayHandler}/>
        )
    }else{
        return(
            <CreateNewUserView pageDisplayHandler = {pageDisplayHandler}/>
        )
    }
    
}