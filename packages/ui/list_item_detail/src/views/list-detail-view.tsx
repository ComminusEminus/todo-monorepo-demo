import React from 'react'
import { Container } from '@design/container'
import { DisplayListItemDetails } from '../components/display-list-item-details'
import { useTheme } from 'styled-components'
import { useDisplayListItemDetailsUI } from '../hooks/use-display-listitem-details-ui'
import {Text} from '@design/text'

export const ListDetailView = () => {
    const theme = useTheme()
    const {displayItem} = useDisplayListItemDetailsUI()

    return (
        <>
            {
                displayItem && <Container
                    background={theme.colors.neutral.background}
                    width={'100%'}
                    height={'100%'}
                    alignItems = {'flex-start'}
                    mb = {'5vh'}
                >
                    <DisplayListItemDetails displayItem = {displayItem} />
                </Container>
            }
            
        </>

    )
}