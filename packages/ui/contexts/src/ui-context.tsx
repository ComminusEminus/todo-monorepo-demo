import React, {createContext, useState, useContext} from 'react';
import {IMappedUserProfile} from '@core/entities'

export interface IUIContext{
    addNewListItemForm?: string; 
    setAddNewListItemForm: (arg: string) => void;
    update?: string; 
    setUpdate?: (arg: string) => void;
    userProfile?: IMappedUserProfile; 
    setUserProfile: (arg: IMappedUserProfile | undefined) => void;
    viewTodoList?: string; 
    setViewTodoList?: (arg: string) => void;
    viewTodoListItem?: string; 
    setViewTodoListItem?: (arg: string) => void;
    formsState?: string; 
    setFormsState?: (arg: string) => void;
} 

const defaultState = {
    addNewListItemForm: undefined,
    setAddNewListItemForm: () => null,
    update: undefined,
    setUpdate: () => null,
    userProfile: undefined,
    setUserProfile: () => null,
    viewTodoList: undefined,
    viewTodoListItem: undefined,
    setViewTodoListItem: () => null,
    setViewTodoList: () => null,
    formsState: undefined,
    setFormsState: () => null
}

export const UIContext = createContext<IUIContext>(defaultState);

export const useUIContext = () => {
    const {...value} = useContext<IUIContext>(UIContext) 
    return {...value} 
}

export interface IUIProvider{
    children?: JSX.Element | JSX.Element[]
}

export const UIProvider = (props: IUIProvider) => {
    const [addNewListItemForm, setAddNewListItemForm] = useState<string>('')
    const [update, setUpdate] = useState<string>('')
    const [userProfile, setUserProfile] = useState<IMappedUserProfile | undefined>(undefined)
    const [viewTodoList, setViewTodoList] = useState<string>('')
    const [viewTodoListItem, setViewTodoListItem] = useState<string>('')
    const [formsState, setFormsState] = useState<string>('')
    
    return (
        <UIContext.Provider value={{
            addNewListItemForm, 
            setAddNewListItemForm,
            update, 
            setUpdate,
            userProfile, 
            setUserProfile,
            viewTodoList, 
            viewTodoListItem, 
            setViewTodoListItem,
            setViewTodoList,
            formsState, 
            setFormsState
         }}>
          {props.children}
        </UIContext.Provider>
      );
}



