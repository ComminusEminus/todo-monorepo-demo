import React, {useEffect, useState} from 'react'
import {useTheme} from 'styled-components'
import {ListContainer} from '@reactui/common'
import {FilterListButtonGroup} from '../components/filter-list-button-group/presentation/filter-list-button-group'
import {OpenAddNewTodoListItemFormButton} from '../components/open-add-new-list-item-form/presentation/open-add-new-todo-list-item-form-button'
import {MapListItems} from './map-list-items'
import {ListItemViewHook} from './hooks/list-item-view-hook'


export const ListItemView = () => {
    const theme = useTheme()
    const {filterListHandler, filterListState, filteredList} = ListItemViewHook()
    

    return(
        <ListContainer 
            listTitle = {'Todo List Items'}
            listMap = {<MapListItems filteredList = {filteredList} />}
            footerOptions = {<OpenAddNewTodoListItemFormButton />}
            titleOptions = {
                <FilterListButtonGroup 
                    filterListHandler = {filterListHandler} 
                    filterListState = {filterListState}
                />
            }
        />
    )
    
}



