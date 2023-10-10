import React, {useEffect, useState} from 'react'
import {useUIContext} from '@reactui/contexts';
import {Dashboard} from './dashboard'
import {UserView} from '@reactui/user'

export const EntryPoint = () => {
    const {state} = useUIContext()
    const {loggedIn} = state
    
    return(
        <>
            {localStorage.getItem('loggedIn') === null? <UserView /> :  <Dashboard />}            
        </>
    )    
       
}

