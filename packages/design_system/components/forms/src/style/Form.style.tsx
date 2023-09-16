import styled from 'styled-components'

export interface IFormStyleProps{
    flexDirection?: string;
}


export const FormStyle = styled.form<IFormStyleProps>`
    display: inline-flex;
    padding: 0px;
    width: 100%;
    box-sizing: border-box;
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: stretch;
    align-items: stretch;
    gap: ${props => props.theme.space.sm};
`