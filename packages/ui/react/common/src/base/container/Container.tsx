import React from 'react'
import {ContainerStyle, ContainerStyleProps} from '@design/container'
import type {ContainerProps} from './IContainerProps'


export const Container = (props: ContainerProps) => {
    return (
        <ContainerStyle
            flex = {props.flex}
            overflowx = {props.overflowx}
            overflowy = {props.overflowy}
            overflow = {props.overflow}
            width = {props.width}
            maxWidth = {props.maxWidth}
            height = {props.height}
            pt = {props.pt}
            pb = {props.pb} 
            pl = {props.pl}
            pr = {props.pr}
            mb = {props.mb}
            mt = {props.mt}
            mr = {props.mr}
            ml = {props.ml}
            padding = {props.padding}
            background = {props.background}
            display = {props.display}
            flexDirection ={props.flexDirection}
            justifyContent = {props.justifyContent}
            alignItems = {props.alignItems}
            flexGrow = {props.flexGrow}
            flexShrink = {props.flexShrink}
            flexBasis = {props.flexBasis}
            fontFamily = {props.fontFamily}
            gap = {props.gap}
            elevation = {props.elevation}
            borderRadius = {props.borderRadius}
            maxHeight = {props.maxHeight}
            boxSizing = {props.boxSizing}
            border = {props.border}
        >
            {props.children}
        </ContainerStyle>
    )
}