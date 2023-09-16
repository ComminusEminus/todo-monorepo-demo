import React from 'react'
import {Container} from '@design/container'
import {TodoListItemContainer} from '../components/index'
import {useTheme} from 'styled-components'
import {Text} from '@design/text'
import {OpenFormButton} from '@ui/common'
import {useOpenAddNewListItemForm} from '../hooks/ui-interactions/use-open-new-list-item-form'
import {useFilterTodoListItems} from '../hooks/ui-interactions/use-filter-todolist-items'
import {FilterListButtonGroup} from '../components/buttons/filter-list-button-group'
export const TodoListView = () => {
    const theme = useTheme()
    const {filterListHandler, filteredList, filterListState} = useFilterTodoListItems()
    const {openAddNewListItemFormHandler, state} = useOpenAddNewListItemForm()
    return(
        <>
            <Container
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height = {'100%'}
                display = {'flex'}
                flexDirection = {'column'}
                alignItems = {'flex-start'}
            >
                <Text text = {'Todo List Items'} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.lg} fontFamily={'Albert_Sans'} />
                <FilterListButtonGroup filterListHandler = {filterListHandler} filterListState = {filterListState}/>
            </Container>
            <Container 
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height={'55vh'}
                display = {'block'}
            >
                <TodoListItemContainer filteredList = {filteredList } />
            </Container>
            {
                filteredList && 
                <Container pt = {'25px'} flexGrow = {'0'} width = {'100%'} justifyContent= {'flex-end'} alignItems = {'center'} background={theme.colors.neutral.surface}>
                    <OpenFormButton onClick = {openAddNewListItemFormHandler} />
                </Container>
            }
        </>
    )
}