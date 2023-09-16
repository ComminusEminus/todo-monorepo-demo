import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import {NavBarBottom as NavBarBottomComponent} from '../presentation/NavBarBottom'


const meta: Meta<typeof NavBarBottomComponent> = {
    //title: 'design_system/Container',
    component: NavBarBottomComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof NavBarBottomComponent>



const NavBarBottom: Story = {
    args:{}
}
