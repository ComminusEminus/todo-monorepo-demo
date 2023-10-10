import React from 'react'
import {useTheme} from 'styled-components'
import {useSwitchPageHandler} from '../hooks/handlers/use-switch-page-handler'
import {CreateNewUserView} from './create-new-user-view'
import {LoginView} from './login-view'
import {LoginProvider} from '@reactui/contexts'
export const UserView = () => {
    const {pageDisplay, pageSwitchHandler} = useSwitchPageHandler()
    
    if(pageDisplay === 'LOGIN_PAGE'){
        return(
            <LoginView />
        )
    }else{
        return(
            <CreateNewUserView/>
        )
    }
    
}