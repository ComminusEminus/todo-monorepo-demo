import styled, {css} from 'styled-components'
import {ContainerStyle} from '@design/container'

export interface NavBarStyleProps{
    position?: string;
}

export const NavBarStyle = styled(ContainerStyle)<NavBarStyleProps>`
    position: absolute;
    height: auto;
    z-index: 4000;
    left: 0px;
    right: 0px;
    justify-content: ${props => props.justifyContent|| 'stretch'};
    align-items: ${props => props.alignItems|| 'stretch'};
    box-shadow: ${props => props.elevation || props.theme.shadow.sm};
    top: 0px;
`