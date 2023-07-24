import styled, {css, keyframes} from 'styled-components'
import {slideOpen, slideClose} from '@design/animations'

export interface SideSheetStyleProps{
    background?: string;
    animateState?: string;
}


export const SideSheetStyle = styled.div<SideSheetStyleProps>`
    background: ${props => props.background || props.theme.colors.neutral.surfaceLow};   
    box-shadow: 0px -10px 15px -10px hsl(0deg 0% 0% / 0.30);
    
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: ${props => props.theme.space.xs};
    transition: opacity .5s linear;
    
    ${(props) => {
        
        if(props.animateState === 'animateOpen'){
            return css`
                animation: ${slideOpen} .5s forwards;
                height: 100%;
                & > {
                    opacity: 1;
                    display: inline-flex;
                }
            `
            
        }else if(props.animateState === 'animateClose'){
            return css`
                    animation: ${slideClose} .5s forwards;
                    height: 100%;
                    & > div {
                        opacity: 0;
                        display: none;
                    }
                `

        }else if(props.animateState == 'static'){
            return css`
                opacity: 0;
                height: 100%;

                    & > div {
                        opacity: 0;
                        display: none;
                    }
                
                `
        }
    }}
`