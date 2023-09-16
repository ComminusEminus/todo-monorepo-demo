import {useUIContext} from '@ui/contexts'
import { UIACTIONS } from '@core/entities'
import React, {useState, useEffect} from 'react'
import {useLogoutUser} from '../api/use-logout-user'

export interface IPageDisplayState{
    page: 'LOGIN_PAGE' | 'CREATE_NEW_PAGE'
}


export const useSwitchPage = () => {
    const [pageDisplay, setPageDisplay] = useState<'LOGIN_PAGE' | 'CREATE_NEW_PAGE'>('LOGIN_PAGE');
    
    const pageDisplayHandler = () => {
        if(pageDisplay === 'LOGIN_PAGE'){
            setPageDisplay('CREATE_NEW_PAGE')
        }else{
            setPageDisplay('LOGIN_PAGE')
        }
    }

    return{
        pageDisplay,
        pageDisplayHandler
    }
}