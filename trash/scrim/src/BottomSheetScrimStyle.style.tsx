import styled, {css} from 'styled-components'

import {ScrimStyleProps} from '../interfaces/IScrimStyleProps'
import {DefaultScrimStyle} from './Scrim.style'


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

