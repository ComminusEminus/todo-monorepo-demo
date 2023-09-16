import type { Meta, StoryObj } from '@storybook/react';
import {SvgButton as SvgButtonComponent} from '../presentation/SvgButton'
import { HamburgerIconStyle } from './example-components/Hamburger.style';

const meta: Meta<typeof SvgButtonComponent> = {
    //title: 'design_system/Container',
    component: SvgButtonComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof SvgButtonComponent>

export const SvgButtonHamburgerExample: Story = {
    args:{
        size: 'sm',
        buttonStyle: 'primary',
        viewBox: HamburgerIconStyle.viewBox ,
        iconWidth: HamburgerIconStyle.width,
        iconHeight: HamburgerIconStyle.height,
        path: HamburgerIconStyle.path,
        fill: '#000000',
        
    }
}
