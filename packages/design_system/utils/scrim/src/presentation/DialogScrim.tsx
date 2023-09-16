import React from 'react'
import {ScrimProps} from '../interfaces/IScrimProps'
import {DialogScrimStyle} from '../style/DialogScrimStyle.style'

export const DialogScrim = (props: ScrimProps) => {
    return(
        <DialogScrimStyle 
            animateState = {props.animateState}
            scrimType = {props.scrimType}
        >
            {props.children}
        </DialogScrimStyle>
    )
}