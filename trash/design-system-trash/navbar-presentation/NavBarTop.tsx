import React from 'react'
import {Container} from '@design/container'
import {INavBar} from '../interfaces/INavBar'
import {NavBarStyle} from '../style/NavBar.style'
import {useTheme} from 'styled-components'
import {NavBarMenuButton} from './navbar-menu-button'

import {SvgButton} from '@design/buttons'
import {useOpenCloseController} from '@design/useopenclosecontroller'
import {SideSheet} from '@design/sidesheet'
import { HamburgerIconStyle } from '@design/icons'



export const NavBarTop = (props: INavBar) => {
    const {sheetHandler, animateState} = useOpenCloseController()
    const theme = useTheme()
    console.log(animateState)
    return(
        <>
            <NavBarStyle 
                elevation = {props.elevation}
                background = {theme.colors.neutral.surface}
            >
                <Container
                    pt = '12px'
                    pb = '16px'
                    pl = '8px'
                    pr = '8px'
                >
                    <Container 
                        flexShrink = {'2'}
                        flexGrow = {'1'}
                        justifyContent = {'flex-start'}
                        children = {<NavBarMenuButton sheetHandler = {() => sheetHandler()}/>}
                    />
                    <Container 
                        flexShrink = {'1'}
                        flexGrow = {'2'}
                        children = {props.logo}
                    />   
                </Container>
                <SideSheet 
                    children = {props.menuItems}
                    sheetHandler = {() => sheetHandler()}
                    animateState = {animateState}
                />
            </NavBarStyle>
        </>
    )
}

