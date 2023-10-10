import styled, {css} from 'styled-components'

import {ScrimStyleProps} from '../interfaces/IScrimStyleProps'


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
            if(props.scrimType === 'TINTED'){
                return css `background: ${props.theme.colors.neutral.scrim};` 
            }else{
                return css `background: rgba(255, 255, 255, 0);`
            }
        }
    }
`
