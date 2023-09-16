import styled, { css, keyframes } from 'styled-components'
import {ButtonStyleProps} from '../interfaces/IButtonStyleProps'
import {ButtonStyle} from './Button.style'

export const OutlineButtonStyle = styled(ButtonStyle) <ButtonStyleProps>`
    background: transparent; 
    border-color: ${props => props.border || props.theme.colors.primary.base}; 
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    type: ${props => props.type};
    cursor: inherit;
    
    border-radius: inherit;
    color: ${props => props.color || props.theme.colors.neutral.onBackground};
    ${
        (props) => {
            if (props.size === 'lg') {
                return css`
                        padding: calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 15rem);
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + 1rem);
                    `
            } else if (props.size === 'sm') {
                return css`
                        padding: calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 10rem);
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
