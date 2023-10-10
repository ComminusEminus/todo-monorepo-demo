import React from 'react'
import { useTheme } from 'styled-components'
import { ITodoList } from '@core/entities'
import { Text, Container, ListContainer } from '@reactui/common'
import {OpenAddNewListFormButton} from '../open-add-new-list-button/presentation/open-add-new-list-form-button'
import { MapLists } from './map-lists'


export const ListsContainer = () => {
    return (
        <ListContainer 
            listTitle = {'Todo Lists'}
            listMap = {<MapLists /> }
            footerOptions = {<OpenAddNewListFormButton />}
        />
    )
}


/*
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
                mt = {'25px'}
            >
                <MapLists />   
            </Container>
            <Container pt = {'35px'} flexGrow = {'0'} width = {'100%'} justifyContent= {'flex-end'} alignItems = {'center'} background={theme.colors.neutral.surface}>
                <OpenAddNewListFormButton />
            </Container>
        </>


    )

*/