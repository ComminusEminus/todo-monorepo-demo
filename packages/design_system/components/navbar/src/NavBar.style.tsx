import styled, {css} from 'styled-components'
import {ContainerStyle, ContainerStyleProps} from '@design/container'

export interface NavBarStyleProps extends ContainerStyleProps{
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
    ${
        (props) => {
            if(props.position === 'top'){
                return css`
                    top: 0px;
                `
            }else if(props.position === 'bottom'){
                return css`
                    bottom: 0px;
                `
            }
        }
    }
`