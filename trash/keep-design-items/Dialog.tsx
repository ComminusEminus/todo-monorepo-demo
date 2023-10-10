import React from 'react'
import {useTheme} from 'styled-components'
import {DialogStyle} from './Dialog.style'
import {DialogScrim} from '@design/scrim'
import {DialogProps} from './IDialogProps'

export const Dialog = (props: DialogProps) => {
    const theme = useTheme()
    return(
        <DialogScrim>
            <DialogStyle elevation = {props.elevation}>
                {props.children}
            </DialogStyle>
        </DialogScrim>
    )
}
