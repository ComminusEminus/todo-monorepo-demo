import React, { createContext, useContext, useReducer, Dispatch } from 'react';

import { IUIDefaultState, IUIAction } from '../interfaces/ui-interfaces'
import { uiReducer, UIDefaultState } from '../reducers/ui-reducer'

export interface IUIContextState {
    state: IUIDefaultState;
    dispatch: Dispatch<IUIAction>;
}

export const UIDefaultContextState: IUIContextState = {
    state: UIDefaultState,
    dispatch: (value: IUIAction) => null
}
    
//------


export const UIContext = createContext<IUIContextState>(UIDefaultContextState);

export const useUIContext = (context = UIContext) => {
    const { state, dispatch } = useContext<IUIContextState>(context)
    return { state, dispatch }
}

//------------

export interface IUIProvider {
    children?: JSX.Element | JSX.Element[]
    defaultState?: IUIDefaultState
}

export const UIProvider = ({defaultState = UIDefaultState, children}: IUIProvider) => {
    const [state, dispatch] = useReducer(uiReducer, defaultState)

    return (
        <UIContext.Provider value={{state, dispatch}}>
            {children}
        </UIContext.Provider>
    );
}



