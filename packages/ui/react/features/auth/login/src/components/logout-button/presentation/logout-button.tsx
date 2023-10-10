import React from 'react'
import {useTheme} from 'styled-components'
import {LogoutStyle} from '@design/icons'
import {SvgButton} from '@reactui/common'
import {useLogoutUserUi} from '../hooks/use-logout-user-ui'

export const LogoutButton = () => {
    const {requestState, logoutApiHandler} = useLogoutUserUi()
    const theme = useTheme()

    return (
        <SvgButton 
            viewBox =  {LogoutStyle.viewBox}
            iconWidth =  {LogoutStyle.width}
            iconHeight =  {LogoutStyle.height}
            path =  {LogoutStyle.path}
            type = {'button'} 
            fill = {theme.colors.primary.base}
            onClick = {logoutApiHandler}
        />
    )
}