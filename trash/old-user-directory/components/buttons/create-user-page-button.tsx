import React from 'react'
import { useTheme } from 'styled-components'
import { Container, Button } from '@reactui/common'



export interface ILoginUserContainer {
    pageSwitchHandler: () => void;
}

export const CreateUserPageButton = ({ pageSwitchHandler }: ILoginUserContainer) => {
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
                onClick={pageSwitchHandler}
            />
        </Container>
    )
}