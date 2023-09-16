import styled, {css, keyframes} from 'styled-components'
import {slideOpenScrim, slideCloseScrim} from '@design/animations' 
import {ScrimStyleProps} from '../interfaces/IScrimStyleProps'
import {DefaultScrimStyle} from './Scrim.style'


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
