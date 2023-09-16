import React from 'react'
import { useTheme } from 'styled-components'

import {SvgIcon} from '@design/svgicon'
import {CloseIconStyle} from '../source-file/Close.style'
import {ISVGIcon} from '../SVGIconInterface'

export const CloseIcon = (props: ISVGIcon) => {
    const theme = useTheme()
    return (
        <SvgIcon 
            viewBox= {CloseIconStyle.viewBox}
            width= {props.iconSize || CloseIconStyle.width}
            height= {props.iconSize || CloseIconStyle.height}
            path = {CloseIconStyle.path}
            fill = {props.fill || theme.colors.neutral.onBackground}
        />
    )
}