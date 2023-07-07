import styled, {css} from 'styled-components'
import {slideOpenScrim, slideCloseScrim} from '@design/animations'

interface ScrimStyleProps{
    borderRadius?: string;
    animateState?: string;
    background?: string;
    scrimType?: string;
}


export const DefaultScrimStyle = styled.div<ScrimStyleProps>`
    position: absolute;
    z-index: 22000;
    display:flex;
    align-items: flex-end;
    & > {
        border-radius: ${props => props.borderRadius || `${props.theme.space.md} ${props.theme.space.md} 0 0`};
    }
    ${
        (props) => {
            if(props.scrimType === 'tinted'){
                return css `background: ${props.theme.colors.neutral.scrim};` 
            }else{
                return css `background: rgba(255, 255, 255, 0);`
            }
        }
    }
`

export const SideSheetScrimStyle = styled(DefaultScrimStyle)<ScrimStyleProps>`
    left: 0px;
    top: 0px;
    bottom:0px;
    height: 100vh;
    opacity: 1;

    ${
        (props) => {
        
            if(props.animateState === 'animateOpen'){
                return css`
                    animation: ${slideOpenScrim} .6s forwards;
                    display: flex;
                    
                    
                `
                
            }else if(props.animateState === 'animateClose'){
                return css`
                        animation: ${slideCloseScrim} .25s forwards;

                        
                    
                    `

            }else if(props.animateState == 'static'){
                return css`
                    width: 0vh;    
                    height: 0vh;
                    display: none;
                    
                    
                `
            }
        }
    }
`

export const BottomSheetScrimStyle = styled(DefaultScrimStyle)<ScrimStyleProps>`
    left: 0px;
    right: 0px;
    bottom:0px;

    ${
        (props) => {
        
            if(props.animateState === 'animateOpen'){
                return css`
                    height: 100vh;
                    
                `
            }else if(props.animateState === 'animateClose'){
                return css`
                        height: 20vh;
                    `
            }else if(props.animateState === 'static'){
                return css`
                    height: 20vh;
                `
            }
        }
    }
`

export const DialogScrimStyle = styled(DefaultScrimStyle)<ScrimStyleProps>`
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    justify-content: center;
    align-items: center;
    background: ${props => props.background || props.theme.colors.neutral.scrim};
`