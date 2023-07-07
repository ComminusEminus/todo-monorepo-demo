import React from 'react'
import {ContainerStyle, ContainerStyleProps} from './Container.style'

export interface ContainerProps extends ContainerStyleProps{
    onClick?: any;
    children?: JSX.Element | JSX.Element[] | string;
}


export const Container = (props: ContainerProps) => {
    return (
        <ContainerStyle
            width = {props.width}
            height = {props.height}
            pt = {props.pt}
            pb = {props.pb} 
            pl = {props.pl}
            pr = {props.pr}
            mb = {props.mb}
            mt = {props.mt}
            mr = {props.mr}
            ml = {props.ml}
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
        >
            {props.children}
        </ContainerStyle>
    )
}