import React from 'react'
import { useTheme } from 'styled-components'
import { Text, Container, ListBackground } from '@reactui/common'
import { useListsContext, useUIContext } from '@ui/contexts'


interface ITodoListBackground {
    children?: JSX.Element | JSX.Element[] | string;
}

export const ListsBackground = (props: ITodoListBackground) => {
    const { dispatch, state } = useUIContext()
    const { selectedTodoListId } = state

    const { dispatch: listsDispatch, state: listsState } = useListsContext()
    const { listsData } = listsState
    const {_id} = listsData
    const theme = useTheme()

    return(
        <ListBackground selectedId = {selectedTodoListId} currentId = {_id} >
            {props.children}
        </ListBackground>
    )    

}
