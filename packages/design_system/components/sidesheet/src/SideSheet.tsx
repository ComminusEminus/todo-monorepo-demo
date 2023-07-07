import React from "react";
import {useTheme} from 'styled-components'

import {SideSheetStyle, SideSheetStyleProps} from './SideSheet.style'
import {SideSheetScrim} from '@design/scrim'
import {SvgButton} from '@design/buttons'
import {ArrowBackIcon} from '@design/icons'

export interface SideSheetProps extends SideSheetStyleProps{
    children?: JSX.Element | JSX.Element[]; 
    sheetHandler?: () => {}; 
    animateState?: 'animateOpen' | 'animateClose' | 'static'; 
    scrimType?: string;
}


export const SideSheet = (props: SideSheetProps) => {
    const theme = useTheme()
    return(
        <SideSheetScrim scrimType = {props.scrimType} animateState = {props.animateState}>
            <SideSheetStyle animateState = {props.animateState}>
                {props.children}
                <SvgButton 
                    children = {
                        <ArrowBackIcon 
                            iconSize = {theme.space.lg} 
                            fill = {theme.colors.neutral.onSurface}
                        />
                    }
                    elevation = 'none'
                    onClick = {props.sheetHandler}
                />
            </SideSheetStyle>
        </SideSheetScrim>
    )
}