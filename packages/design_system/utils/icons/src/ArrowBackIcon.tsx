import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {ArrowBackStyle} from './ArrowBack.style'
import {ISVGIcon} from './SVGIconInterface'

export const ArrowBackIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    
    return(
        <SvgIcon
            viewBox= {ArrowBackStyle.viewBox}
            width= {props.iconSize || ArrowBackStyle.width}
            height= {props.iconSize || ArrowBackStyle.height}
            path = {ArrowBackStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}