import type { Meta, StoryObj } from '@storybook/react';
import {SvgIcon as SvgIconComponent} from '../SvgIcon'
//import {StarIconStyle} from '../star-icon-example'
//add start icon from somewhere else
const meta: Meta<typeof SvgIconComponent> = {
    //title: 'design_system/Container',
    component: SvgIconComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof SvgIconComponent>

export const SvgIcon: Story = {
    args:{
        viewBox: StarIconStyle.viewBox,
        width: StarIconStyle.width,
        height: StarIconStyle.height,
        path: StarIconStyle.path,
        fill: '#000000'
    }
}

