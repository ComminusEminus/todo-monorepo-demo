import React from "react";
import {useTheme} from 'styled-components'

import {SideSheetStyle, SideSheetStyleProps} from './SideSheet.style'
import {SideSheetScrim} from '@design/scrim'
import {SvgButton} from '@design/buttons'
import {ArrowBackStyle} from '@design/icons'

export interface SideSheetProps extends SideSheetStyleProps{
    children?: string[] | JSX.Element | JSX.Element[]; 
    sheetHandler?: () => void; 
    animateState?: 'animateOpen' | 'animateClose' | 'static'; 
    scrimType?: "TINTED";
}


export const SideSheet = (props: SideSheetProps) => {
    const theme = useTheme()
    return(
        <SideSheetScrim scrimType = {props.scrimType} animateState = {props.animateState}>
            <SideSheetStyle animateState = {props.animateState}>
                {props.children}
                <SvgButton 
                    size = {'sm'}
                    buttonStyle = {'primary'}
                    viewBox = {ArrowBackStyle.viewBox }
                    iconWidth = {ArrowBackStyle.width}
                    iconHeight = {ArrowBackStyle.height}
                    path = {ArrowBackStyle.path}
                    fill = {'#000000'}
                    onClick = {props.sheetHandler}
                />
            </SideSheetStyle>
        </SideSheetScrim>
    )
}