import styled, { css, keyframes } from 'styled-components'
import {ButtonStyleProps} from '../interfaces/IButtonStyleProps'

export const ButtonStyle = styled.button<ButtonStyleProps>`
    type: ${props => props.type};
    cursor: inherit;
    
    border-radius: inherit;
    padding: ${props => props.padding};
    font-family: ${props => props.fontFamily || 'Barlow'};
    text-transform: capitalize;
    background: ${props => props.background};
    text-align: ${props => props.textAlign};  
    box-sizing: border-box;
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    color: ${props => props.color || props.theme.colors.neutral.onBackground}
    
    ${
        (props) => {
            if (props.size === 'lg') {
                return css`
                        padding: calc(${props => props.theme.space.xs}) calc(${props => props.theme.space.sm}) calc(${props => props.theme.space.xs}) calc(${props => props.theme.space.xs});
                        width: calc(${props => props.theme.space.xl} + 15rem);
                        height: calc(${props => props.theme.space.xl});
                        font-size: calc(${props => props.theme.space.sm} + 1rem);
                    `
            } else if (props.size === 'sm') {
                return css`
                        padding: calc(${props => props.theme.space.xs}) calc(${props => props.theme.space.sm}) calc(${props => props.theme.space.xs}) calc(${props => props.theme.space.sm});
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
    
    ${(props) => {
        if (props.buttonStyle === 'primary') {
            return css`
                    background: ${(props) => props.theme.colors.primary.base};
                    color: ${(props) => props.theme.colors.primary.onBase};
                    border: ${(props) => props.theme.colors.primary.base} solid ${props.theme.space.xxs};
                `
        } else if (props.buttonStyle === 'secondary') {
            return css`
                    background: ${(props) => props.theme.colors.secondary.base};
                    color: ${(props) => props.theme.colors.secondary.onBase};
                    border: ${(props) => props.theme.colors.secondary.base} solid ${props.theme.space.xxs};
                `
        } else if (props.buttonStyle === 'tertiary') {
            return css`
                    background: ${(props) => props.theme.colors.tertiary.base};
                    color: ${(props) => props.theme.colors.tertiary.onBase};
                    border: ${(props) => props.theme.colors.tertiary.base} solid ${props.theme.space.xxs};
                `
        } else if (props.buttonStyle === 'success') {
            return css`
                    background: ${(props) => props.theme.colors.semantic.success};
                    color: ${(props) => props.theme.colors.neutral.surfaceHigh};
                    border: ${(props) => props.theme.colors.semantic.success} solid ${props.theme.space.xxs};
                `
        } else if (props.buttonStyle === 'error') {
            return css`
                    background: ${(props) => props.theme.colors.semantic.error};
                    color: ${(props) => props.theme.colors.semantic.onError};
                    border: ${(props) => props.theme.colors.semantic.error} solid ${props.theme.space.xxs};
                `
        }
    }
    }
    &: disabled {
        border: ${props => props.theme.colors.primary.baseDisabled};
        background: ${props => props.theme.colors.primary.baseDisabled};
        opacity: ${props => props.theme.opacityState.disabledContainer};
        color: ${props => props.theme.colors.neutral.onBackground};
    };
`
