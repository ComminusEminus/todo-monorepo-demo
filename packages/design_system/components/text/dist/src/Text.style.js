import styled from 'styled-components';
export const TextStyle = styled.div `
    margin:0;
    color: ${(props) => props.color || props.theme.colors.neutral.onBackground};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
`;
//# sourceMappingURL=Text.style.js.map