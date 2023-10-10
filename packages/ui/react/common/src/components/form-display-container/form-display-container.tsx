import React, {useEffect, useState} from 'react'
import { useTheme } from 'styled-components';
import {Container} from '../../base/container/Container'
import {Text} from '../../base/text/Text'

export interface IFormDisplayContainer{
    title: string;
    formComponent: JSX.Element | JSX.Element[]
}
export const FormDisplayContainer = ({title, formComponent}:IFormDisplayContainer) => {
    const theme = useTheme()
    return(
         <>
         <Container
            elevation = {'md'}
            height = {'25vh'}
            width = {'100%'}
            background = {theme.colors.neutral.surface}
            flexDirection= {'column'}
            justifyContent = {'stretch'}
            alignItems = {'stretch'}
         >
            <Container
                background = {theme.colors.neutral.surface}
            
                pt = {'10px'}

                pr = {'10px'}
                pl = {'10px'}
                justifyContent = {'flex-start'}
                alignItems = {'center'}
            >
                <Text text = {title} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.md} fontFamily={'Albert_Sans'} />
            </Container>
            <Container
                background = {theme.colors.neutral.surface}
                height = {'100%'}
                width = {'100%'}
                pt = {'10px'}
                pb = {'10px'}
                pr = {'10px'}
                pl = {'10px'}
                justifyContent = {'center'}
                alignItems = {'center'}
            >
                {formComponent}
            </Container>
        </Container>
         </>
    )
}