import styled, {css} from 'styled-components'
import {animateOut, animateIn, animatePageIn, deleteItemAnimation} from '@design/animations'

export interface AnimationStyleWrapperProps{
    animateState?: string;
}

export const DefaultAnimationWrapperStyle = styled.div<AnimationStyleWrapperProps>`
    width: auto;
    height: 100%;
    box-sizing: border-box;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
`

export const AnimationWrapperStyle = styled(DefaultAnimationWrapperStyle)<AnimationStyleWrapperProps>`
    width: 100%;

    ${
        (props) => {
            if(props.animateState === 'animateIn'){
                return css`animation: ${animateIn} .6s forwards;`
            }else if(props.animateState === 'animateOut'){
                return css`animation: ${animateOut} .6s forwards;`
            }
        }
    }

`

export const PageAnimationWrapperStyle = styled(DefaultAnimationWrapperStyle)<AnimationStyleWrapperProps>`
    width: 100%;
    padding-top: ${props => props.theme.space.xl};
    padding-left: ${props => props.theme.space.xl};
    padding-right: ${props => props.theme.space.xl};
    padding-bottom: ${ props => props.theme.space.xl};

    ${
        (props) => {
            if(props.animateState === 'animateIn'){
                return css`animation: ${animatePageIn} .6s forwards;`
            }else if(props.animateState == 'static'){
                return css`
                    width: 100%;
                    height: 100%;
                `
            }
        }
    }

`
export const DeleteItemAnimationWrapperStyle = styled(DefaultAnimationWrapperStyle)<AnimationStyleWrapperProps>`
    width: 100%;
    height: fit-content;
    ${
        (props) => {
            if(props.animateState === 'VISIBLE'){
                return css`animation: none;`
            }else if(props.animateState === 'INVISIBLE'){
                return css`animation: ${deleteItemAnimation} .6s forwards;`
            }
        }
    }

`
