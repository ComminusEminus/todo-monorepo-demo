import React, {createContext, useContext, useEffect, useReducer, Dispatch} from 'react';
import {ITodoListItem} from '@core/entities'
import {LIST_ITEM_ACTIONS, IList_Item_DefaultState, IList_Item_Action} from '../interfaces/list-item-interfaces'
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

    return (
        <ListItemContext.Provider value={{state, dispatch}}>
          {children}
        </ListItemContext.Provider>
      );
}

