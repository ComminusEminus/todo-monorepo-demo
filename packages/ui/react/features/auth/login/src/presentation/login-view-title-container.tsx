import React from 'react'
import {Text, Container} from '@reactui/common'
import {useTheme} from 'styled-components'


export const LoginViewTitleContainer = () => {
    const theme = useTheme()
    return (
            <Container 
                pt = {'sm'}
                pb = {'sm'}
                height = {'fit-content'}
                width = {'100%'}
                background = {theme.colors.neutral.surface}
                flexDirection = {'column'}
                justifyContent = {'center'}
                alignItems = {'flex-start'}
            >
                <Text text={'Todo List Tracker'} color={theme.colors.secondary.base} fontSize={theme.space.xl} fontFamily={'Albert_Sans'} />
                <Text text={'Login'} color={theme.colors.secondary.base} fontSize={theme.space.lg} fontFamily={'Albert_Sans'} />
            </Container>
    )
}