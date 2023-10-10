import React from 'react'
import { Container } from '@reactui/common'
import { DisplayListItemDetails } from '../components/display-list-item-details'
import { useTheme } from 'styled-components'
import { useGetListItemByIdHandler } from '../hooks/handlers/use-get-list-item-by-id-handler'


export const ListDetailView = () => {
    const theme = useTheme()
    const {displayItem, loading} = useGetListItemByIdHandler()

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
                    <DisplayListItemDetails displayItem = {displayItem} loading = {loading} />
                </Container>
            }
            
        </>

    )
}