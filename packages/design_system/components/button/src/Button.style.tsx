import styled, {css, keyframes} from 'styled-components'

interface ButtonStyleProps{
    width?: string;
    size?: string;
    buttonStyle?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    alignSelf?: string; 
    type?: string;
    onClick?: Function;
    pt?: string;
    pb?: string; 
    pl?: string;
    pr?: string;
    color?: string;
}

export type{
    ButtonStyleProps
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
    type: ${props => props.type};
    cursor: inherit;
    width: ${props => props.width || '100%'};
    border-radius: inherit;
    letter-spacing: .15rem;
    font-family: Barlow;
    text-transform: capitalize;
    border: none;
    box-sizing: border-box;
    color: ${props => props.color || props.theme.colors.neutral.onBackground}
    
    ${
        (props) => {
            if(props.size === 'lg'){
                return css`
                    padding-top: ${props => props.theme.space.sm};
                    padding-bottom: ${props => props.theme.space.sm};
                    padding-left: ${props => props.theme.space.md};
                    padding-right: ${props => props.theme.space.md};
                    font-size: ${props => props.theme.space.sm};
                `
            }else if(props.size === 'sm'){
                return css`
                    padding-top: ${props => props.theme.space.xs};
                    padding-bottom: ${props => props.theme.space.xs};
                    padding-left: ${props => props.theme.space.xl};
                    padding-right: ${props => props.theme.space.xl};
                    font-size: calc(${props => props.theme.space.sm} + .05rem);
                `
            }else{
                return css`
                    padding-top: ${props.pt || 0};
                    padding-bottom: ${props.pb || 0};
                    padding-left: ${props.pl || 0};
                    padding-right: ${props.pr || 0};
                `
            }
        }
    }
    ${
        (props) => {
            if(props.buttonStyle === 'primary'){
                return css`
                    background: ${(props) => props.theme.colors.primary.base};
                    color: ${(props) => props.theme.colors.primary.onBase};
                    border: ${(props) => props.theme.colors.primary.base} solid ${props.theme.space.xxs};
                `
            }else if(props.buttonStyle === 'secondary'){
                return css`
                    background: ${(props) => props.theme.colors.secondary.base};
                    color: ${(props) => props.theme.colors.secondary.onBase};
                    border: ${(props) => props.theme.colors.secondary.base} solid ${props.theme.space.xxs};
                `
            }else if(props.buttonStyle === 'tertiary'){
                return css`
                    background: ${(props) => props.theme.colors.tertiary.base};
                    color: ${(props) => props.theme.colors.tertiary.onBase};
                    border: ${(props) => props.theme.colors.tertiary.base} solid ${props.theme.space.xxs};
                `
            }else if(props.buttonStyle === 'success'){
                return css`
                    background: ${(props) => props.theme.colors.semantic.success};
                    color: ${(props) => props.theme.colors.neutral.surfaceHigh};
                    border: ${(props) =>props.theme.colors.semantic.success} solid ${props.theme.space.xxs};
                `
            }else if(props.buttonStyle === 'error'){
                return css`
                    background: ${(props) => props.theme.colors.semantic.error};
                    color: ${(props) => props.theme.colors.semantic.onError};
                    border: ${(props) =>props.theme.colors.semantic.error} solid ${props.theme.space.xxs};
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

export const OutlineButtonStyle = styled(ButtonStyle)<ButtonStyleProps>`
    background: transparent; 
    width: 100%;
    color: ${props => props.color || props.theme.colors.neutral.onBackground};
    
`

export const TextButtonStyle = styled(ButtonStyle)<ButtonStyleProps>`
    border: none;
    background: transparent;
    color: ${props => props.color || props.theme.colors.neutral.onBackground};
`

export const SvgButtonStyle = styled(ButtonStyle)<ButtonStyleProps>`
    background: transparent;
    height: fit-content;
    width: fit-content;
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'}
    padding: 0px 0px 0px 0px;
    color: ${props => props.color || props.theme.colors.neutral.onBackground}
`
