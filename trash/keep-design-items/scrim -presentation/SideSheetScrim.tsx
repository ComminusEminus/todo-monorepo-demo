import React from 'react'
import {ScrimProps} from '../interfaces/IScrimProps'
import {SideSheetScrimStyle} from '../style/SideSheetScrimStyle.style'


export const SideSheetScrim = (props: ScrimProps) => {
    return(
        <SideSheetScrimStyle 
            animateState = {props.animateState}
            scrimType = {props.scrimType}
        >
            {props.children}
        </SideSheetScrimStyle>
    )
}
