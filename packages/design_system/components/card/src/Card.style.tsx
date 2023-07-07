import styled, {css} from 'styled-components'

export interface CardStyleProps {
    display?: string;
    borderRadius?: string;
    cardType?:string;
}
export const CardStyle = styled.div<CardStyleProps>`
    min-width: 20vw;
    min-height: 30vh;
    display: ${props => props.display || 'inline-flex'};
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    ${
        (props) => {
            if(props.borderRadius === 'sm'){
                return css`border-radius: ${props.theme.borderRadius.sm};`
            }else if(props.borderRadius === 'md'){
                return css`border-radius: ${props.theme.borderRadius.md};`
            }else if(props.borderRadius == 'lg'){
                return css`border-radius: ${props.theme.borderRadius.lg};`
            }else if(props.borderRadius === 'xl'){
                return css`border-radius: ${props.theme.borderRadius.xl};`
            }else{
                return css`border-radius: ${props.theme.borderRadius.md};`
            }
        }
    }
    ${
        (props) => {
            if(props.cardType === 'shadow'){
                return css`
                    box-shadow: ${props.theme.shadow.md};
                `
            }else if(props.cardType === 'filled'){
                return css`
                    background: ${props.theme.colors.primary.baseContainer};
                `
            }else if(props.cardType === 'outline'){
                return css`
                    border: ${props.theme.space.sm} solid ${props.theme.colors.primary.baseContainer};
                `
            }
        }
    }
`