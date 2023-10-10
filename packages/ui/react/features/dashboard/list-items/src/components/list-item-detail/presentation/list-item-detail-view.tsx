import React from 'react'
import { useTheme } from 'styled-components'
import { Container } from '@reactui/common'
import { useGetListItemByIdHandler } from '../hooks/use-get-list-item-by-id-handler'
import { ListItemDetail } from './list-item-detail'


export const ListDetailView = () => {
    const theme = useTheme()
    const {listItem} = useGetListItemByIdHandler()

    return (
        <>
            {
                listItem && <Container
                    background={theme.colors.neutral.background}
                    width={'100%'}
                    maxHeight={'15vh'}
                    alignItems = {'flex-start'}
                    elevation={'sm'}
                    
                >
                    <ListItemDetail displayItem = {listItem} />
                </Container>
            }
            
        </>

    )
}