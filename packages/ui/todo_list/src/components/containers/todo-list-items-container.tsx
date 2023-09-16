import React from 'react'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {useTheme} from 'styled-components'
import {MapTodoListItems} from '../other/map-todo-list-items'
import {FilterListButtonGroup} from '../buttons/filter-list-button-group'
import {useFilterTodoListItems} from '../../hooks/ui-interactions/use-filter-todolist-items'
import {useGetTodoListById} from '../../hooks/api/use-get-todolist-by-id'
import {OpenFormButton} from '@ui/common'
import {useOpenAddNewListItemForm} from '../../hooks/ui-interactions/use-open-new-list-item-form'
import {ITodoListItem, Filter} from '@core/entities'
export interface ITodoListItemContainer{
    filteredList: ITodoListItem[] | null | [];


}


export const TodoListItemContainer = ({filteredList}: ITodoListItemContainer)  => {
    const theme = useTheme()
    if(!filteredList){
        return(
            <Container height = {'48vh'} width = {'100%'} flexGrow = {'2'}  alignItems = {'flex-start'} justifyContent = {'flex-start'} background = {theme.colors.neutral.surface}>
                <Text text = {'No List Selected'} color = {theme.colors.neutral.onBackground} fontSize = {theme.space.md} fontFamily = {'Albert_Sans'} />
            </Container>
        )
    }else if(filteredList.length > 0){
        return(
            <>
                <Container 
                    flexGrow = {'1'}
                    background={theme.colors.neutral.background}
                    flexDirection = {'column'}
                    alignItems = {'stretch'}
                    justifyContent = {'flex-start'}
                    width = {'100%'}
                    height = {'54vh'}
                    overflowy = {'scroll'}
                    overflowx = {'hidden'}
                >
                    <MapTodoListItems list = {filteredList}/>
                </Container>           
            </>
            
        )
    }else{
        return(
            <>
                <Container height = {'48vh'} width = {'100%'} flexGrow = {'2'} mt = {'10px'} alignItems = {'flex-start'} justifyContent = {'flex-start'} background = {theme.colors.neutral.surface}>
                    <Text text = {'No Todo Items in List'} color = {theme.colors.neutral.onBackground} fontSize = {theme.space.md} fontFamily = {'Albert_Sans'} />
                </Container>
            </>
        )
    }
   
}



/*

return(
        <>
            {
                filteredList === null && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <Text text = {'No List Selected'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert_Sans'} />
                    </Container>
                )
            }
            {
                filteredList.length > 0 && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <FilterListButtonGroup filterListHandler = {filterListHandler} filterListState = {filterListState}/>
                        <MapTodoListItems list = {filteredList}/>
                        <OpenFormButton onClick = {useOpenAddNewListItemForm} />
                    </Container>
                )
            }
        </>
    )
    else if(filteredList.length === 0){
        return(
            <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                <Text text = {'Selected List Has No Todos!'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert_Sans'} />
                <OpenFormButton onClick = {useOpenAddNewListItemForm} />
            </Container>
        )
    }

*/