import React from 'react'
import { useUpdateTodoListsImplementation } from '../../hooks/implementation/use-update-todo-lists-implementation'
import { MapTodoLists } from '../other/map-todo-lists'
import { Text } from '@design/text'
import { Container } from '@design/container'
import { useTheme } from 'styled-components'
import { ITodoList } from '@core/entities'
import {OpenFormButton} from '@ui/common'
import {useOpenAddNewListForm} from '../../hooks/ui-interactions/use-open-add-new-list-form'
export interface ITodoListsContainer {
    allTodoLists: ITodoList[];
    loading: boolean;
    errorMessage: any;
}

export const TodoListsContainer = ({ allTodoLists, loading, errorMessage }: ITodoListsContainer) => {
    const theme = useTheme()
    return (
        <>      
            {
                allTodoLists.length == 0 && <Container flexGrow = {'1'} flexDirection={'column'} background={theme.colors.neutral.surface} border = {`2.5px solid ${theme.colors.neutral.onBackground}`}>
                    <Text text={'You currently have nothing Todo!'} color={theme.colors.neutral.onBackground} fontSize={'xs'} fontFamily={'Albert_Sans'} />
                </Container>
            }
            {
                allTodoLists.length > 0 && <Container
                    flexGrow = {'1'}
                    background={theme.colors.neutral.background}
                    flexDirection = {'column'}
                    alignItems = {'stretch'}
                    justifyContent = {'flex-start'}
                    width = {'100%'}
                    height = {'54vh'}
                    overflowy = {'scroll'}
                    overflowx = {'hidden'}
                    mt = {'25px'}
                >
                    <MapTodoLists lists={allTodoLists} />   
                </Container>
            }   
        </>


    )


}
