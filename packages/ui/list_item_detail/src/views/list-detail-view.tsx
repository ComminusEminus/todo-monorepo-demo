import React from 'react'
import {Container} from '@design/container'
import {DisplayListItemDetails} from '../components/display-list-item-details'
import {useTheme} from 'styled-components'

export const ListDetailView = () => {
    const theme = useTheme()
    return(
        <Container 
            background = {theme.colors.neutral.background}
            width = {'100%'}
            height = {'100%'}
        >
            <DisplayListItemDetails />
        </Container>
    )
}