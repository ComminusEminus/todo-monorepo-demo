import React, { createContext, useContext } from 'react';

import {useOpenCloseController} from '@design/useOpenCloseController'

export interface SideSheetContextProps{
    sheetHandler?: () => void;
    animateState?: string;
}

const defaultState = {
    sheetHandler: undefined,
    animateState: undefined,
}

export const SideSheetContext = React.createContext<SideSheetContextProps>(defaultState);

export const useSideSheetContext = () => {
    const {...value} = useContext(SideSheetContext)
    return {...value}
}

export interface SideSheetProviderProps{
    children?: JSX.Element | JSX.Element[] 
}

export const SideSheetProvider = (props: SideSheetProviderProps) => {
    const {sheetHandler, animateState} = useOpenCloseController()
    
    return(
        <SideSheetContext.Provider value={{sheetHandler, animateState}}>
            {props.children}
        </SideSheetContext.Provider>
    )
}