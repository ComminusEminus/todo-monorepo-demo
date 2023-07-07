import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {ChevronLeftStyle} from './ChevronLeft.style'
import {ISVGIcon} from './SVGIconInterface'

export const ChevronLeftIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    
    return (
        <SvgIcon 
            viewBox= {ChevronLeftStyle.viewBox}
            width= {props.iconSize || ChevronLeftStyle.width}
            height= {props.iconSize || ChevronLeftStyle.height}
            path = {ChevronLeftStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}