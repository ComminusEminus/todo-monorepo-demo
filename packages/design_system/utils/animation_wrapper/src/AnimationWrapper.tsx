import React from 'react'
import * as AnimationStyle from './AnimationWrapper.style'

export interface AnimationWrapperProps extends AnimationStyle.AnimationStyleWrapperProps{
    children?: JSX.Element | JSX.Element[] | string;
    animateState: string;
}

export const AnimationWrapper = (props: AnimationWrapperProps) => {

    return(
        <AnimationStyle.AnimationWrapperStyle animateState = {props.animateState} >
            {props.children}
        </AnimationStyle.AnimationWrapperStyle>
    )
}

export const PageAnimationWrapper = (props: AnimationWrapperProps) => {

    return(
        <AnimationStyle.PageAnimationWrapperStyle animateState = {props.animateState} >
            {props.children}
        </AnimationStyle.PageAnimationWrapperStyle>
    )
}

export const DeleteItemAnimationWrapper = (props: AnimationWrapperProps) => {

    return(
        <AnimationStyle.DeleteItemAnimationWrapperStyle animateState = {props.animateState} >
            {props.children}
        </AnimationStyle.DeleteItemAnimationWrapperStyle>
    )
}
