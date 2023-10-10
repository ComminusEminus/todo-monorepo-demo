import React from 'react'
import {LoginPageSwitchButton} from '@reactui/common'
import {Text, Container} from '@reactui/common'
import {useTheme} from 'styled-components'

export const CreateAccountOptionContainer = () => {
    const theme = useTheme()
    return(
        <>
            <Container 
                pt = {'sm'}
                pb = {'sm'}
                height = {'25%'}
                width = {'100%'}
                background = {theme.colors.neutral.surface}
                justifyContent = {'flex-end'}
                alignItems = {'center'}
            >
                <Text text={'Dont Have an Account? '} color={theme.colors.neutral.onSurface} fontSize={'18px'} fontFamily={'Barlow'} />
                <LoginPageSwitchButton />
            </Container>
        </>
    )
}