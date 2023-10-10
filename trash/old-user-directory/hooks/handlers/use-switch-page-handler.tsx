import React, {useState} from 'react'
import {PAGE_DISPLAY_STATE} from '@core/entities'

export enum PAGE_DISPLAY_STATE{
    LOGIN_PAGE = 'LOGIN_PAGE',
    CREATE_NEW_PAGE = 'CREATE_NEW_PAGE'
}

export interface IPageDisplayState{
    page: 'LOGIN_PAGE' | 'CREATE_NEW_PAGE'
}


export const useSwitchPageHandler = () => {
    const [pageDisplay, setPageDisplay] = useState<'LOGIN_PAGE' | 'CREATE_NEW_PAGE'>('LOGIN_PAGE');
    
    const pageSwitchHandler = () => {
        if(pageDisplay === 'LOGIN_PAGE'){
            setPageDisplay('CREATE_NEW_PAGE')
        }else{
            setPageDisplay('LOGIN_PAGE')
        }
    }

    return{
        pageDisplay,
        pageSwitchHandler
    }
}