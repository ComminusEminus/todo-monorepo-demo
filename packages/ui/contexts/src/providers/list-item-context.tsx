import React, {createContext, useRef, useState, useContext, useEffect, useReducer, Dispatch} from 'react';
import {ITodoListItem, CompleteState, VisibilityState, LIST_ITEM_ACTIONS, IList_Item_DefaultState, IList_Item_Action} from '@core/entities'
import { listItemReducer, List_Item_DefaultState } from '../reducers/list-item-reducer'

export interface IList_Item_ContextState{
    state: IList_Item_DefaultState;
    dispatch: Dispatch<IList_Item_Action>;
}

export const List_Item_DefaultContextState: IList_Item_ContextState = {
  state: List_Item_DefaultState,
  dispatch: (value: IList_Item_Action) => null
}

export const ListItemContext = createContext<IList_Item_ContextState >(List_Item_DefaultContextState);

export const useListItemContext = () => {
    const {state, dispatch} = useContext<IList_Item_ContextState>(ListItemContext) 
    return {state, dispatch} 
}

export interface IListItemProvider{
  children?: JSX.Element | JSX.Element[] | string;
  listItem?: ITodoListItem;
  defaultState?: IList_Item_DefaultState
}

export const ListItemProvider = ({children, listItem, defaultState = List_Item_DefaultState}: IListItemProvider) => {
  const [state, dispatch] = useReducer(listItemReducer, defaultState)
  const {completeState, visibilityState} = state
  
  
  
  useEffect(() => {
    dispatch({type: LIST_ITEM_ACTIONS.ADD_LIST_ITEM_DATA, payload: listItem})
  }, [])
  /*useEffect(() => {
    if(listItem){
      dispatch({type: LIST_ITEM_ACTIONS.SET_COMPLETE_STATE, payload: listItem.complete})
    }
  }, [])*/

    return (
        <ListItemContext.Provider value={{state, dispatch}}>
          {children}
        </ListItemContext.Provider>
      );
}

