import styled, {css} from 'styled-components'

import {ScrimStyleProps} from '../interfaces/IScrimStyleProps'
import {DefaultScrimStyle} from './Scrim.style'


export const DialogScrimStyle = styled(DefaultScrimStyle)<ScrimStyleProps>`
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    justify-content: center;
    align-items: center;
    background: ${props => props.background || props.theme.colors.neutral.scrim};
`