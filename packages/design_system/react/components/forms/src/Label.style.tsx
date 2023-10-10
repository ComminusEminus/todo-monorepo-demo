import styled from 'styled-components'

export const LabelStyle = styled.label`
    font-family: 'Barlow';
    position: relative;
    top: 16px;
    left: 10px;
    font-size: ${8 + 2}px;
    letter-spacing: 1px;
    align-self: flex-start;
    color: ${props => props.theme.colors.neutral.onSurface};
`