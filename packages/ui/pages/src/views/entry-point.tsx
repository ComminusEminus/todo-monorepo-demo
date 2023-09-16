import React, {useEffect, useState} from 'react'
import {useUIContext} from '@ui/contexts';
import {Dashboard} from './dashboard'
import {UserView} from '@ui/user'

export const EntryPoint = () => {
    const {state} = useUIContext()
    const {loggedIn} = state
    
    return(
        <>
            {localStorage.getItem('loggedIn') === null? <UserView /> :  <Dashboard />}            
        </>
    )    
       
}

//{localStorage.getItem('loggedIn') && <Dashboard />}