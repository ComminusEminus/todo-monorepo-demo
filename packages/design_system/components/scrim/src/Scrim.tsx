import React from 'react'

import * as ScrimStyle from './Scrim.style'

interface ScrimProps{
    borderRadius?: string;
    animateState?: string;
    background?: string;
    scrimType?: string;
    children?: JSX.Element | JSX.Element[] | string
}



export const Scrim = (props: ScrimProps) => {
    return(
        <ScrimStyle.DefaultScrimStyle 
            animateState = {props.animateState} 
            scrimType = {props.scrimType}
        >
            {props.children}
        </ScrimStyle.DefaultScrimStyle>
    )
}

export const SideSheetScrim = (props: ScrimProps) => {
    return(
        <ScrimStyle.SideSheetScrimStyle 
            animateState = {props.animateState}
            scrimType = {props.scrimType}
        >
            {props.children}
        </ScrimStyle.SideSheetScrimStyle>
    )
}

export const BottomSheetScrim = (props: ScrimProps) => {
    return(
        <ScrimStyle.BottomSheetScrimStyle 
            animateState = {props.animateState}
            scrimType = {props.scrimType}
        >
            {props.children}
        </ScrimStyle.BottomSheetScrimStyle>
    )
}

export const DialogScrim = (props: ScrimProps) => {
    return(
        <ScrimStyle.DialogScrimStyle 
            animateState = {props.animateState}
            scrimType = {props.scrimType}
        >
            {props.children}
        </ScrimStyle.DialogScrimStyle>
    )
}