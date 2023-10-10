import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch
} from 'react';

import { IAll_Lists_Action, IAll_Lists_DefaultState } from '../interfaces/all-lists-interfaces'
import {allListsReducer, All_Lists_DefaultState} from '../reducers/all-lists-reducer'


export interface IAll_Lists_ContextState {
  state: IAll_Lists_DefaultState;
  dispatch: Dispatch<IAll_Lists_Action>;
}

export const All_Lists_Default_Context_State: IAll_Lists_ContextState = {
  state: All_Lists_DefaultState,
  dispatch: (value: IAll_Lists_Action) => null
}

//-------


export const AllListsContext = createContext<IAll_Lists_ContextState>(All_Lists_Default_Context_State);

export const useAllListsContext = (context = AllListsContext) => {
  const { state, dispatch } = useContext<IAll_Lists_ContextState>(context)
  return { state, dispatch }
}


//---


export interface IAllListsProvider {
  children?: JSX.Element | JSX.Element[] | string;
  defaultState?: IAll_Lists_DefaultState
}

export const AllListsProvider = ({ defaultState = All_Lists_DefaultState, children }: IAllListsProvider) => {
  const [state, dispatch] = useReducer(allListsReducer, All_Lists_DefaultState)

  
  return (
    <AllListsContext.Provider value={{ state, dispatch }}>
      {children}
    </AllListsContext.Provider>
  );
}



/*
export const AllListsProvider = ({ defaultState = All_Lists_DefaultState, children }: IAllListsProvider) => {
  const [state, dispatch] = useReducer(allListsReducer, All_Lists_DefaultState)
  const { update } = state

  const { getAllTodoListsApiHandler, getAllTodoListsApiState } = useGetAllTodoListsApi()
  const { returnValue } = getAllTodoListsApiState
  const { lists, message } = returnValue

  useEffect(() => {

    getAllTodoListsApiHandler()

  }, [update])

  useEffect(() => {

    if (message === 'ok') {
      dispatch({ type: ALL_LISTS_ACTIONS.ADD_ALL_LISTS, payload: lists })
    }

  }, [message])

  console.log(state)
  return (
    <AllListsContext.Provider value={{ state, dispatch }}>
      {children}
    </AllListsContext.Provider>
  );
}

*/