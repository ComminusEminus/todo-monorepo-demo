import React, { createContext, useContext, useReducer, Dispatch} from 'react';
import { selectedListReducer, SelectedList_DefaultState } from '../reducers/selected-list-reducer'

import { ISelected_List_Action, ISelectedList_DefaultState } from '../interfaces/selected-list-interfaces'

export interface ISelectedList_ContextState {
  state: ISelectedList_DefaultState;
  dispatch: Dispatch<ISelected_List_Action>;
}

export const Selected_Lists_DefaultContextState: ISelectedList_ContextState = {
  state: SelectedList_DefaultState,
  dispatch: (value: ISelected_List_Action) => null
}


export const SelectedListContext = createContext<ISelectedList_ContextState>(Selected_Lists_DefaultContextState);

export const useSelectedListContext = () => {
  const { state, dispatch } = useContext<ISelectedList_ContextState>(SelectedListContext)
  return { state, dispatch }
}

export interface ISelectedListProvider {
  children?: JSX.Element | JSX.Element[] | string;
  defaultState?: ISelectedList_DefaultState
}

export const SelectedListProvider = ({ children, defaultState = SelectedList_DefaultState }: ISelectedListProvider) => {
  const [state, dispatch] = useReducer(selectedListReducer, SelectedList_DefaultState)
  
  return (
    <SelectedListContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectedListContext.Provider>
  );
}


