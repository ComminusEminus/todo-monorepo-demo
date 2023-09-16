import React from 'react'
import {useTheme} from 'styled-components'

import {NavBarStyle} from './NavBar.style'
import {NavBarLayoutTop, NavBarLayoutBottom} from './NavBarLayout'
//import {HamburgerIcon} from '@design/icons'
import {Button} from '@design/buttons'

/*
export const HamburgerNavBarButton = () => {
    const theme = useTheme()
    return(
        <HamburgerIcon 
            iconSize = {theme.space.lg}
            fill = {theme.colors.neutral.onBackground}
        />
    )
}
*/

export interface NavBarTopButtonProps{
    children?: string | JSX.Element | JSX.Element[];
    onClick?: () => {};
}


export const NavBarTopButton = ( {onClick, children}:NavBarTopButtonProps) => {
    
        const theme = useTheme()
        return(
            <Button 
                elevation = 'xs'
                onClick = {onClick}
            >
              {children}  
            </Button>
        )
}

export interface NavBarTopProps{
    menuButton?: string | JSX.Element | JSX.Element[];
    elevation?: string;
    onClick?: () => {};
     
}

export const NavBarTop = (props: NavBarTopProps) => {
    const theme = useTheme()
    return(
        <NavBarStyle 
            elevation = {props.elevation}
            background = {theme.colors.neutral.surface}
        >
            <NavBarLayoutTop
                menuButton = {<NavBarTopButton onClick = {props.onClick} children = {props.menuButton}/>}
            />
        </NavBarStyle>
    )
}

export interface NavBarBottomProps{
    children?: string | JSX.Element | JSX.Element[];
    elevation?: string;
}
export const NavBarBottom = (props: NavBarBottomProps) => {
    const theme = useTheme()
    return(
        <NavBarStyle 
            position = 'bottom'
            elevation = {props.elevation}
        >
            <NavBarLayoutBottom children = {props.children} />
        </NavBarStyle>
    )
}