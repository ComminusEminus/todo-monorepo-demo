import React, {useContext} from "react";

import {BottomSheetStyle} from './BottomSheet.style'
import {BottomSheetScrim} from '@design/scrim'
import {SvgButton} from '@design/buttons'
import {useBottomSheetContext, BottomSheetProvider} from '@design/bottomsheetcontext'


export interface BottomSheetProps{
    scrimType?: 'TINTED';
    background?: string;
    icon?: string;
    animateState?: string;
    children?: JSX.Element | JSX.Element[] | string;
}

const BottomSheetComponent = (props: BottomSheetProps) => {
    const {sheetHandler, animateState} = useBottomSheetContext()

    return(
        <BottomSheetScrim scrimType = {props.scrimType} animateState = {animateState}>
            <BottomSheetStyle 
                animateState = {props.animateState}
                background = {props.background}
            >
                <SvgButton onClick = {() => sheetHandler?.()}>
                    {props.icon}
                </SvgButton>
                {props.children}
            </BottomSheetStyle>
        </BottomSheetScrim>
    )
}
export const BottomSheet = (props: BottomSheetProps) => {
    return(
        <BottomSheetProvider>
            <BottomSheetComponent scrimType = {props.scrimType} background = {props.background} icon = {props.icon} animateState = {props.animateState} >
                {props.children}
            </BottomSheetComponent>
        </BottomSheetProvider>
    )
}


