import React from 'react'
import {useTheme} from 'styled-components'

import {DialogStyle} from './Dialog.style'
import {DialogScrim} from '@design/scrim'

interface DialogProps{
    elevation?: string;
    children?: JSX.Element | JSX.Element[] | string;
}


export const Dialog = (props: DialogProps) : JSX.Element => {
    const theme = useTheme()
    return(
        <DialogScrim>
            <DialogStyle elevation = {props.elevation}>
                {props.children}
            </DialogStyle>
        </DialogScrim>
    )
}
