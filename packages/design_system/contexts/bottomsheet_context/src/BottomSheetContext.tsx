import React, { useContext, createContext } from 'react';
import {BottomSheet} from '@design/BottomSheet'
import {useOpenCloseController} from '@design/useOpenCloseController'

export interface BottomSheetContextProps{
    sheetHandler?: Function;
    animateState?: string;
}

const defaultState = {
    sheetHandler: undefined,
    animateState: undefined
}

export const BottomSheetContext = React.createContext<BottomSheetContextProps>(defaultState);

export const useBottomSheetContext = () => {
    const {...value} = useContext(BottomSheetContext)
    return {...value}
}

export interface BottomSheetProviderProps{
    children?: JSX.Element | JSX.Element[] 
}
export const BottomSheetProvider = (props:BottomSheetProviderProps) => {
    const {sheetHandler, animateState} = useOpenCloseController()
    
    return(
        <BottomSheetContext.Provider value={{sheetHandler, animateState}}>
            {props.children}
        </BottomSheetContext.Provider>
    )
}