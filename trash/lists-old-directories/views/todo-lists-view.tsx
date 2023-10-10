import React from 'react'
import { ListsContainer } from '../components/containers/lists-container'
import { Container, Text } from '@reactui/common'
import { useTheme } from 'styled-components'
import { useGetAllListsUi } from '../hooks/ui-interactions/use-get-all-lists-ui'
import {OpenAddNewListFormButton} from '../components/buttons/open-add-new-list-form-button'
import {AllListsProvider} from 'reactui/context'
export const ListsView = () => {
    const theme = useTheme()
    //const { getAllTodoListsApiState } = useGetAllListsUi()
    //const { allTodoLists, loading } = getAllTodoListsApiState

    return(
        <>
            <AllListsProvider>

                
            </AllListsProvider>
        </>
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
                <Text text = {'Todo Lists'} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.lg} fontFamily={'Albert_Sans'} />
            </Container>
            <Container 
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height={'60vh'}
                display = {'block'}
            >
                <ListsContainer allTodoLists={allTodoLists} loading={loading} />
            </Container>    
            <Container pt = {'35px'} flexGrow = {'0'} width = {'100%'} justifyContent= {'flex-end'} alignItems = {'center'} background={theme.colors.neutral.surface}>
                <OpenAddNewListFormButton />
            </Container>
        </>
    )

*/