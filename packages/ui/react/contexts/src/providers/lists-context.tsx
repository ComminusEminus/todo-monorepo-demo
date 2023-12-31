import React, {useReducer, useEffect, createContext, useContext, Dispatch} from 'react';
import {ITodoList} from '@core/entities'
import {LISTS_ACTIONS, ILists_DefaultState, ILists_Action} from '../interfaces/lists-interfaces'
import {listsReducer, Lists_DefaultState} from '../reducers/lists-reducer'


export interface ILists_ContextState {
  state: ILists_DefaultState;
  dispatch: Dispatch<ILists_Action>;
}
export const Lists_DefaultContextState: ILists_ContextState = {
  state: Lists_DefaultState,
  dispatch: (value: ILists_Action) => null
}

export const ListsContext = createContext<ILists_ContextState>(Lists_DefaultContextState);

export const useListsContext = () => {
  const {state, dispatch} = useContext<ILists_ContextState>(ListsContext) 
    return {state, dispatch}
}

export interface IListsProvider{
  children?: JSX.Element | JSX.Element[] | string;
  list?: ITodoList
  defaultState?: ILists_DefaultState
}

export const ListsProvider = ({children, list, defaultState = Lists_DefaultState}: IListsProvider) => {
  const [state, dispatch] = useReducer(listsReducer, Lists_DefaultState)
  useEffect(() => {
    dispatch({type: LISTS_ACTIONS.ADD_LIST_DATA, payload: list})
  }, [])

    return (
        <ListsContext.Provider value={{state, dispatch}}>
          {children}
        </ListsContext.Provider>
      );
}

