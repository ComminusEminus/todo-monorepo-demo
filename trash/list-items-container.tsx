import React from 'react'
import {useTheme} from 'styled-components'
import {Text, Container, ListContainer} from '@reactui/common'
import {FilterListButtonGroup} from '../filter-list-button-group/presentation/filter-list-button-group'
import {OpenAddNewTodoListItemFormButton} from '../open-add-new-list-item-form/presentation/open-add-new-todo-list-item-form-button'
import {MapTodoListItems} from './map-todo-list-items'

export const ListItemContainer = ()  => {
    return (
        <ListContainer 
            listTitle = {'Todo List Items'}
            listMap = {<MapTodoListItems />}
            footerOptions = {<OpenAddNewTodoListItemFormButton />}
            titleOptions = {<FilterListButtonGroup/>}
        />

    )
}


/*
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
                <FilterListButtonGroup />
            </Container>
            <Container 
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height={'55vh'}
                display = {'block'}
            >
                <MapTodoListItems />
            </Container>
            <Container pt = {'25px'} flexGrow = {'0'} width = {'100%'} justifyContent= {'flex-end'} alignItems = {'center'} background={theme.colors.neutral.surface}>
                <OpenAddNewTodoListItemFormButton />
            </Container>
        </>
    )

*/