import React from 'react'
import {SvgButton} from '@design/buttons'
import {useTheme} from 'styled-components'
import {LogoutStyle} from '@design/icons'
import {useLogoutUserUpdateObserver} from '../hooks/ui-interactions/use-logout-user-update-observer'
export const LogoutButton = () => {
    const {requestState, logoutApiHandler} = useLogoutUserUpdateObserver()
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