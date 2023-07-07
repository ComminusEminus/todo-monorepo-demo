import styled, {css} from 'styled-components'

export interface TextStyleProps{
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
}

export const TextStyle = styled.div<TextStyleProps>`
    margin:0;
    color: ${(props) => props.color || props.theme.colors.neutral.onBackground};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
`