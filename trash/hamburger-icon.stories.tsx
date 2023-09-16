import type { Meta, StoryObj } from '@storybook/react';
import {HamburgerIcon as HamburgerIconComponent} from '../component/HamburgerIcon'

const meta: Meta<typeof HamburgerIconComponent> = {
    //title: 'design_system/Container',
    component: HamburgerIconComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof HamburgerIconComponent>

//background colored so it displays default is transparent 
export const HamburgerIcon: Story = {
    args:{
       fill: '#000000'
    }
}

