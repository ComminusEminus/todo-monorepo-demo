import React from 'react'

import { MapTodoLists } from '../presentation/map-todo-lists'
import { Text, Container } from '@reactui/common'
import { useTheme } from 'styled-components'
import { ITodoList } from '@core/entities'



export interface IListsContainer {
    allTodoLists: ITodoList[];
    loading: boolean;

}

export const ListsContainer = () => {
    const theme = useTheme()
    return (
        <>      
            <Container
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height = {'100%'}
                display = {'flex'}
                flexDirection = {'column'}
                alignItems = {'flex-start'}
            >
                <Text text = {'Todo Lists'} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.lg} fontFamily={'Albert_Sans'} />
            </Container>
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
