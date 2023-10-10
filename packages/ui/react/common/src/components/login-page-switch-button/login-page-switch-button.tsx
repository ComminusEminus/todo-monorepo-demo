import React from 'react'
import { useTheme } from 'styled-components'
import {useLoginContext} from '@reactui/contexts'
import {Container} from '../../base/container/Container'
import {TextButton} from '../../base/buttons/variants/text-button'
import {Text} from '../../base/text/Text'



export const LoginPageSwitchButton = () => {
    const {pageSwitchHandler} = useLoginContext()
    const theme = useTheme()

    return (
        <TextButton
            size = {'sm'}
            text={'Click Here'}
            buttonStyle={'primary'}
            onClick={pageSwitchHandler}
            color = {theme.colors.secondary.base}
        />
    )
}