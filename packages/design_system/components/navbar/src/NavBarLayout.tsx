import React from 'react'
import {Container} from '@design/container'

interface NavBarLayoutProps{
    children?: string | JSX.Element | JSX.Element[]; 
    menuButton?: JSX.Element;
    logo?: JSX.Element;
}

export const NavBarLayoutTop = (props: NavBarLayoutProps) => {
    return(

        <Container
            pt = '12px'
            pb = '16px'
            pl = '8px'
            pr = '8px'
        >
            <Container 
                flexShrink = {2}
                flexGrow = {1}
                justifyContent = {'flex-start'}
                children = {props.menuButton}
            />
            <Container 
                flexShrink = {1}
                flexGrow = {2}
                children = {props.logo}
            />   
        </Container>
    )
}

export const NavBarLayoutBottom = (props: NavBarLayoutProps) => {
    return(
        <Container
            pt = '12px'
            pb = '16px'
            justifyContent = 'space-around'
            children = {props.children}
        />
    )
}