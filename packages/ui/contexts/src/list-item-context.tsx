import React, {createContext, useRef, useState, useContext, useEffect} from 'react';
import {ITodoListItem, ListItemStatus, Visibility} from '@core/entities'
import {useUIContext} from '@ui/contexts'
import {mapToListDescription, ITodoListItemDescription} from '@ui/todo-list'
export interface IListItemContext{
    originalState?: ITodoListItemDescription;
    setCompleteState?: (arg: ListItemStatus.INCOMPLETE | ListItemStatus.COMPLETED| undefined)=> void ;
    completeState?: ITodoListItem['complete'] ;
    setVisibilityState?: (arg: Visibility.VISIBLE | Visibility.INVISIBLE)=>void ;
    visibilityState?: Visibility.VISIBLE | Visibility.INVISIBLE ;
    viewTodoListItem?: string;
    setViewTodoListItem?: (arg: string)=>void ;
    
}

const defaultState = {
    originalState: {
      id: '',
      title: '',
      description: '',
      complete: ''
    },
    setCompleteState: () => null,
    completeState: undefined,
    visibilityState: undefined,
    setVisibilityState: () => null,
    setViewTodoListItem: () => null, 
    viewTodoListItem: undefined
}

export const ListItemContext = createContext<IListItemContext >(defaultState);

export const useListItemContext = () => {
    const {...value} = useContext<IListItemContext >(ListItemContext) 
    return {...value} as const 
}

export interface IListItemProvider{
  children?: JSX.Element | JSX.Element[] | string;
  listItem?: ITodoListItemDescription;
}

export const ListItemProvider = (props: IListItemProvider) => {
    const [originalState, setOriginalState] = useState<ITodoListItemDescription | undefined>(undefined)
    const {setViewTodoListItem, viewTodoListItem} = useUIContext()
    const [completeState, setCompleteState] = useState<ITodoListItem['complete'] | undefined>(undefined)
    const [visibilityState, setVisibilityState] = useState<Visibility.VISIBLE | Visibility.INVISIBLE>(Visibility.VISIBLE)

    useEffect(() => {
      if(props.listItem){
        setOriginalState?.(props.listItem)
      }
    },[])
    useEffect(() => {
      if(props.listItem){
        setCompleteState?.(props.listItem.complete)
      }
    },[])
    return (
        <ListItemContext.Provider value={{setCompleteState, completeState, originalState, visibilityState, setVisibilityState, setViewTodoListItem, viewTodoListItem}}>
          {props.children}
        </ListItemContext.Provider>
      );
}


