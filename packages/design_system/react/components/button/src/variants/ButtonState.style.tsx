import styled, {css, keyframes} from 'styled-components'
import {ButtonStateStyleProps} from '../interfaces/IButtonStateStyleProps'    

export const ButtonStateStyle = styled.div<ButtonStateStyleProps>`
    type: ${props => props.type};
    width: ${props => props.buttonStateWidth || 'fit-content'};
    height: fit-content;
    cursor: pointer;
    border: none;
    opacity: 1;
    padding: 0px 0px 0px 0px;
    margin-top: ${props => props.mt || '0px'};
    margin-bottom: ${props => props.mb || '0px'};
    margin-right: ${props => props.mr || '0px'};
    margin-left: ${props => props.ml || '0px'};
    border-radius: ${props => {
        if(props.borderRadius === 'sm'){
            return `${props.theme.borderRadius.sm}`
        }else if(props.borderRadius === 'md'){
            return `${props.theme.borderRadius.md}`
        }else if(props.borderRadius === 'lg'){
            return `${props.theme.borderRadius.lg}`
        }else if(props.borderRadius === 'xl'){
            return `${props.theme.borderRadius.xl}`
        }else{
            return `${props.theme.borderRadius.xl}`
        }
        

    }};
    transition: opacity .35s ease-in;
    ${
        (props) => {
            if(props.buttonStyle === 'primary'){
                return css`
                    background: ${(props) => props.theme.colors.primary.onBase};
                `
            }else if(props.buttonStyle === 'secondary'){
                return css`
                    background: ${(props) => props.theme.colors.secondary.onBase};
                `
            }else if(props.buttonStyle === 'tertiary'){
                return css`
                    background: ${(props) => props.theme.colors.tertiary.onBase};
                `
            }else{
                return css`
                    background: ${props.background};
                `
            }
        }
    }
    ${
        (props) => {
            if(props.elevation == 'sm'){
                return css`box-shadow: ${props.theme.shadow.sm};`
            }else if(props.elevation == 'md'){
                return css`box-shadow: ${props.theme.shadow.md};`
            }else if(props.elevation == 'lg'){
                return css`box-shadow: ${props.theme.shadow.lg};`
            }else if(props.elevation == 'xl'){
                return css`box-shadow: ${props.theme.shadow.xl};`
            }else{
                return css`box-shadow: none;`
            }
        }
    }
    &: hover {
        transition: opacity .25s ease-out;
        opacity: ${props => props.theme.opacityState.hover};
    };
    &: active {
        transition: opacity .25s ease-out;
        opacity: ${props => props.theme.opacityState.focus};
    };
    &: disabled {
        opacity: ${props => props.theme.opacityState.disabledStateLayer};
        background: ${props => props.theme.colors.neutral.onBackground};
    };
`
