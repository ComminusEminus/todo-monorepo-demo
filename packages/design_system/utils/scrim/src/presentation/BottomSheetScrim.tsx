import React from 'react'
import {ScrimProps} from '../interfaces/IScrimProps'
import {BottomSheetScrimStyle} from '../style/BottomSheetScrimStyle.style'

export const BottomSheetScrim = (props: ScrimProps) => {
    return(
        <BottomSheetScrimStyle 
            animateState = {props.animateState}
            scrimType = {props.scrimType}
        >
            {props.children}
        </BottomSheetScrimStyle>
    )
}

