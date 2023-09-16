import React from 'react'
import { Button } from '@design/buttons'
import { useTheme } from 'styled-components'
import { Container } from '@design/container'

export interface ILoginUserContainer {
    pageDisplayHandler: () => void;
}

export const CreateUserPageButton = ({ pageDisplayHandler }: ILoginUserContainer) => {
    const theme = useTheme()
    return (
        <Container
            width={'100%'}
            justifyContent={'flex-end'}
            alignItems={'center'}
        >

            <Button
                size = {'sm'}
                text={'Click Here'}
                buttonStyle={'primary'}
                onClick={pageDisplayHandler}
            />
        </Container>
    )
}