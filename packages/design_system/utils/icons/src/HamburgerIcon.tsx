import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {HamburgerIconStyle} from './HamburgerIcon.style'
import {ISVGIcon} from './SVGIconInterface'

export const HamburgerIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    return(
        <SvgIcon
            viewBox= {HamburgerIconStyle.viewBox}
            width= {props.iconSize || HamburgerIconStyle.width}
            height= {props.iconSize || HamburgerIconStyle.height}
            path = {HamburgerIconStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}