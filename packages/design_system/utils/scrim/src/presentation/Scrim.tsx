import React from 'react'
import {ScrimProps} from '../interfaces/IScrimProps'
import {DefaultScrimStyle} from '../style/Scrim.style'

export const Scrim = (props: ScrimProps) => {
    return(
        <DefaultScrimStyle 
            animateState = {props.animateState} 
            scrimType = {props.scrimType}
        >
            {props.children}
        </DefaultScrimStyle>
    )
}
