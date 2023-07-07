import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {StarIconStyle} from './StarIcon.style'
import {ISVGIcon} from './SVGIconInterface'

export const StarIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    
    return (
        <SvgIcon 
            viewBox= {StarIconStyle.viewBox}
            width= {props.iconSize || StarIconStyle.width}
            height= {props.iconSize || StarIconStyle.height}
            path = {StarIconStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}