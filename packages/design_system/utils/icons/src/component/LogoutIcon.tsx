import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {LogoutStyle} from '../source-file/logout.style'
import {ISVGIcon} from '../SVGIconInterface'

export const LogoutIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    
    return(
        <SvgIcon
            viewBox= {LogoutStyle.viewBox}
            width= {props.iconSize || LogoutStyle.width}
            height= {props.iconSize || LogoutStyle.height}
            path = {LogoutStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}