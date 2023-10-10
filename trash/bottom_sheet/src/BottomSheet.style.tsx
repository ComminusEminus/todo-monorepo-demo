import styled, {css, keyframes} from 'styled-components'


export interface BottomSheetStyleProps{
    background?: string;
    animateState?: string;
}

export const BottomSheetStyle = styled.div<BottomSheetStyleProps>`
    background: ${props => props.background || props.theme.colors.neutral.surfaceLow};   
    box-shadow: 0px -10px 15px -10px hsl(0deg 0% 0% / 0.30);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
`

