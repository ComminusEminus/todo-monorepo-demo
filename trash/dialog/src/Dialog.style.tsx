import styled, {css} from 'styled-components'
import {DialogStyleProps} from './IDialogStyleProps'

export const DialogStyle = styled.div<DialogStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius.md};
    > :first-child{
        border-top-left-radius: ${props => props.theme.borderRadius.md};
        border-top-right-radius: ${props => props.theme.borderRadius.md};
    }
    
    padding: ${props => props.theme.space.md};
    background: ${props => props.theme.colors.neutral.surfaceHigh};
    ${
        (props) => {
            if(props.elevation === 'xl'){
                return css`box-shadow: ${props.theme.shadow.xl};`
            }else if(props.elevation === 'lg'){
                return css`box-shadow: ${props.theme.shadow.lg};`
            }else if(props.elevation === 'md'){
                return css`box-shadow: ${props.theme.shadow.md};`
            }else if(props.elevation === 'sm'){
                return css`box-shadow: ${props.theme.shadow.sm};`
            }else{
                return css`box-shadow: none`
            }
        }
    }
`