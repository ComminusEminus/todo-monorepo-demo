import React from 'react'
import { SvgButton } from './svg-button'
import {DeleteIconStyle} from '@design/icons'
import {ButtonStyle} from '@design/buttons'
import {ButtonProps} from '../interfaces/IButtonProps'
import styled, {useTheme, css} from 'styled-components'

const GroupButtonStyle = styled(ButtonStyle)<ButtonProps>`
    border-radius: 0px;
    padding: 5px;
    width: ${props => props.width};
    background: ${props => props.background};
`   

export interface GroupButtonProps extends ButtonProps{

} 

export const GroupButton = (props: GroupButtonProps) => {
    const theme = useTheme()

    return (
        <GroupButtonStyle
            type = {'button'} 
            buttonStyle = { props.buttonStyle}
            value = {props.value}
            onClick = {props.onClick}
            width = {'100%'}
            background = {props.background}
            color = {props.color}
        >
            {props.text}
        </GroupButtonStyle>
    )
}
