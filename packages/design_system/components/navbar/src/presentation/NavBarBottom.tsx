import React from 'react'
import {Container} from '@design/container'
import {INavBar} from '../interfaces/INavBar'
import {NavBarStyle} from '../style/NavBar.style'

export const NavBarBottom = (props: INavBar) => {
    return(
        <NavBarStyle 
            position = 'bottom'
            elevation = {props.elevation}
        >
            <Container
                pt = '12px'
                pb = '16px'
                justifyContent = 'space-around'
                children = {props.children}
            />
        </NavBarStyle>
    )
}