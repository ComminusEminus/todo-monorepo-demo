import React from 'react'
import {SvgButton} from '@design/buttons'
import {useOpenCloseController} from '@design/useopenclosecontroller'
import {SideSheet} from '@design/sidesheet'
import { HamburgerIconStyle } from '@design/icons'

export interface INavBarMenuButton{
    sheetHandler: () => void;
}

export const NavBarMenuButton = ({sheetHandler}: INavBarMenuButton) => {
    return(
        <SvgButton
            text = {'Button'}
            size = {'sm'}
            buttonStyle = {'primary'}
            viewBox = {HamburgerIconStyle.viewBox }
            iconWidth = {HamburgerIconStyle.width}
            iconHeight = {HamburgerIconStyle.height}
            path = {HamburgerIconStyle.path}
            fill = {'#000000'}
            onClick = {() => sheetHandler()}
        />
    )
}