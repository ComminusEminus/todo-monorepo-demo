import React from 'react'
import { useTheme } from 'styled-components'
import { Text } from '../../base/text/Text'
import { Container } from '../../base/container/Container'


export interface IListContainer{
    listTitle: string;
    listMap: JSX.Element[] | JSX.Element;
    footerOptions: JSX.Element[] | JSX.Element ;
    titleOptions?: JSX.Element |  JSX.Element[] ;
}

export const ListContainer = ({listTitle, listMap, footerOptions, titleOptions}: IListContainer) => {
    const theme = useTheme()
    return(
        <>
            <Container
                background = {theme.colors.neutral.background}
                width = {'100%'}
                maxHeight = {'10vh'}
                display = {'flex'}
                alignItems = {'center'}
                justifyContent = {'flex-start'}
            >
                <Text text = {listTitle} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.lg} fontFamily={'Albert_Sans'} />
            </Container>
            {
                titleOptions && <Container
                    background = {theme.colors.neutral.background}
                    width = {'100%'}
                    maxHeight = {'5vh'}
                    display = {'flex'}
                    alignItems = {'center'}
                    justifyContent = {'center'}
                >
                    {titleOptions}
                </Container>
            }
            <Container
                background = {theme.colors.neutral.background}
                width = {'100%'}
                height={'35vh'}
                display = {'block'}
            >
                <Container
                    flexGrow = {'1'}
                    background={theme.colors.neutral.background}
                    flexDirection = {'column'}
                    alignItems = {'stretch'}
                    justifyContent = {'stretch'}
                    width = {'100%'}
                    //height = {'34vh'}
                    overflowy = {'scroll'}
                    overflowx = {'hidden'}
                    
                >
                    {listMap}   
                </Container>
            </Container>
            <Container 
                pt = {'35px'} 
                flexGrow = {'0'} 
                width = {'100%'} 
                height = {'10vh'}
                justifyContent= {'flex-end'} 
                alignItems = {'center'} 
                background={theme.colors.neutral.surface}
            >
                {footerOptions}
            </Container>
        </>
    )
}