import React, {useEffect, createContext, useState, useContext, useRef} from 'react';
import {ITodoList, Visibility} from '@core/entities'
import {useUIContext} from '@ui/contexts'
import {ITodoListAsListDescription} from '@ui/todo-lists'

export interface IListContext{
  originalState?: ITodoListAsListDescription;
  setViewTodoList?: (arg: string)=>void;
  viewTodoList?: string;
  setVisibilityState?: (arg: Visibility.VISIBLE | Visibility.INVISIBLE)=>void;
  visibilityState?: Visibility.VISIBLE | Visibility.INVISIBLE ;
  
}

const defaultState = {
  originalState: undefined,
  setViewTodoList: () => null,
  viewTodoList: undefined,
  setVisibilityState: () => null,
  visibilityState: undefined

}

export const ListsContext = createContext<IListContext>(defaultState);

export const useListsContext = () => {
    const {...value} = useContext<IListContext>(ListsContext) 
    return {...value} as const 
}

export interface IListsProvider{
  children?: JSX.Element | JSX.Element[] | string;
  list?: ITodoListAsListDescription;
}

export const ListsProvider = (props: IListsProvider) => {
    const {setViewTodoList, viewTodoList} = useUIContext()
    const [visibilityState, setVisibilityState] = useState<Visibility.VISIBLE | Visibility.INVISIBLE >(Visibility.VISIBLE)
    const [originalState, setOriginalState] = useState<ITodoListAsListDescription | undefined>(undefined)
    useEffect(() => {
      setOriginalState(props.list)
    },[])

    return (
        <ListsContext.Provider value={{originalState, setViewTodoList, viewTodoList, visibilityState, setVisibilityState }}>
          {props.children}
        </ListsContext.Provider>
      );
}



