import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {DragHandleStyle} from './DragHandle.style'
import {ISVGIcon} from './SVGIconInterface'

export const DragHandleIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    return (
        <SvgIcon 
            viewBox= {DragHandleStyle.viewBox}
            width= {props.iconSize || DragHandleStyle.width}
            height= {props.iconSize || DragHandleStyle.height}
            path = {DragHandleStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}        
        />
    )
}