import React from 'react'
import {useTheme} from 'styled-components'

import {NavBarStyle} from './NavBar.style'
import {NavBarLayoutTop, NavBarLayoutBottom} from './NavBarLayout'
import {HamburgerIcon} from '@design/icons'
import {SvgButton} from '@design/buttons'


export interface NavBarTopButtonProps{
    onClick?: () => {};
}

export const NavBarTopButton = (props:NavBarTopButtonProps) => {
    const theme = useTheme()
    return(
        <SvgButton 
            elevation = 'xs'
            onClick = {props.onClick}
            children = {
                <HamburgerIcon 
                    iconSize = {theme.space.lg}
                    fill = {theme.colors.neutral.onBackground}
                />
            }
        />
    )
}

export interface NavBarTopProps{
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
                menuButton = {<NavBarTopButton onClick = {props.onClick}/>}
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