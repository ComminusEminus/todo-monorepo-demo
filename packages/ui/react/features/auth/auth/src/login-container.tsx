import React from 'react'
import {useLoginContext} from '@reactui/contexts'
import {CreateNewUserView} from '@reactui/user'
import {LoginView} from '@reactui/login'

export const LoginContainer = () => {
    const {pageDisplay} = useLoginContext()
    
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