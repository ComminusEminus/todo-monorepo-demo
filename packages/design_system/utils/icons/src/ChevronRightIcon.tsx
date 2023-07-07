import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {ChevronRightStyle} from './ChevronRight.style'
import {ISVGIcon} from './SVGIconInterface'


export const ChevronRightIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    
    return (
        <SvgIcon 
            viewBox= {ChevronRightStyle.viewBox}
            width= {props.iconSize || ChevronRightStyle.width}
            height= {props.iconSize || ChevronRightStyle.height}
            path = {ChevronRightStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}