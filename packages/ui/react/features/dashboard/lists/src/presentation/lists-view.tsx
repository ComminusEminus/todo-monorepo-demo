import React, {useEffect} from 'react'
import { useTheme } from 'styled-components'
import { ListContainer } from '@reactui/common'
import {OpenAddNewListFormButton} from '../components/open-add-new-list-button/presentation/open-add-new-list-form-button'
import { MapLists } from './map-lists'
import {ListsViewHook} from './hooks/lists-view-hook'


export const ListsView = () => {
    const theme = useTheme()
    const {getAllTodoListsApiState} = ListsViewHook()
    const { returnValue } = getAllTodoListsApiState
    const { lists } = returnValue

    return (
        <>
            <ListContainer 
                listTitle = {'Todo Lists'}
                listMap = {<MapLists allLists = {lists} /> }
                footerOptions = {<OpenAddNewListFormButton />}
            />
        </>
    )
}

