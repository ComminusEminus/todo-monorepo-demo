import styled, { css, keyframes } from 'styled-components'
import {ButtonStyleProps} from '../interfaces/IButtonStyleProps'
import {ButtonStyle} from './Button.style'

export const SvgButtonStyle = styled(ButtonStyle) <ButtonStyleProps>`
    background: transparent;
    height: fit-content;
    width: fit-content;
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'}
    padding: 0px 0px 0px 0px;
    border: none;
    
    color: ${props => props.theme.colors.neutral.onBackground}
    ${
        (props) => {
            if (props.size === 'lg') {
                return css`
                        padding: calc(${props => props.theme.space.xs});
                        width: fit-content;
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + 1rem);
                    `
            } else if (props.size === 'sm') {
                return css`
                        padding: calc(${props => props.theme.space.xl} + 4rem);
                        width: fit-content;
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + .3rem);
                    `
            } else {
                return css`
                        padding-top: ${props.pt || 0};
                        padding-bottom: ${props.pb || 0};
                        padding-left: ${props.pl || 0};
                        padding-right: ${props.pr || 0};
                    `
            }
        }
    }
`
