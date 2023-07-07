import styled, {css} from 'styled-components'

export interface ContainerStyleProps{
    height?: string;
    maxHeight?: string;
    width?: string;
    background?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
    pt?: string;
    pb?: string;
    pl?: string;
    pr?: string;
    mb?: string;
    mt?: string;
    mr?: string;
    ml?: string;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    gap?: string;
    fontFamily?: string;
    boxSizing?: string;
    borderRadius?: string;
    elevation?: string;
}



export const ContainerStyle = styled.div<ContainerStyleProps>`

    height: ${props => props.height || '100%'};
    max-height: ${props => props.maxHeight};
    width: ${props => props.width || 'auto'};
    background: ${props => props.background || 'transparent'};
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    padding: ${props => props.padding || props.theme.space.sm};
    padding-top: ${props => props.pt || '0px'};
    padding-bottom: ${props => props.pb || '0px'};
    padding-left: ${props => props.pl || '0px'};
    padding-right: ${props => props.pr || '0px'};
    margin-bottom: ${props => props.mb || '0px'};
    margin-top: ${props => props.mt || '0px'};
    margin-right: ${props => props.mr || '0px'};
    margin-left: ${props => props.ml || '0px'};
    flex-grow: ${props => props.flexGrow || 1};
    flex-shrink: ${props => props.flexShrink || 1};
    flex-basis: ${props => props.flexBasis || 0};
    gap: ${props => props.gap}
    font-family: ${props => props.fontFamily};
    box-sizing: ${props => props.boxSizing || 'border-box'};
    border-radius: ${props => props.borderRadius || 0};
    ${
        (props) => {
            if(props.elevation === 'sm'){
                return css`box-shadow: ${props.theme.shadow.sm};`
            }else if(props.elevation === 'md'){
                return css`box-shadow: ${props.theme.shadow.md};`
            }else if(props.elevation === 'lg'){
                return css`box-shadow: ${props.theme.shadow.lg};`
            }else if(props.elevation === 'xl'){
                return css`box-shadow: ${props.theme.shadow.xl};`
            }else{
                return css`box-shadow: none;`
            }
        }
    }
`