import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import {NavBarTop as NavBarTopComponent} from '../presentation/NavBarTop'
import { Container } from '@design/container';
import {Text} from '@design/text'
const meta: Meta<typeof NavBarTopComponent> = {
    //title: 'design_system/Container',
    component: NavBarTopComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof NavBarTopComponent>

const MenuItemsContainer = () => {
    return(
        <Container
            width = {'100%'}
            height = {'30%'}
            flexDirection = {'column'}
            justifyContent = {'flex-start'}
            alignItems = {'stretch'}
            
            padding = {'25px'}
        >
            <Text text = {'Link One'} fontSize = {'25px'} fontFamily = {'Barlow'} color = {'#000000'}/>
            <Text text = {'Link Two'} fontSize = {'25px'} fontFamily = {'Barlow'} color = {'#000000'}/>
        </Container>
    )
}

export const NavBarTop: Story = {
    args:{
        menuItems: <MenuItemsContainer/>,
    }
}
