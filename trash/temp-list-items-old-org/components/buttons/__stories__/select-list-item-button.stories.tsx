import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {SelectListItemButton as SelectButtonComponent} from '../select-list-item-button'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof SelectButtonComponent> = {
    //title: 'design_system/Container',
    component: SelectButtonComponent,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <UIProvider>
              <ListItemProvider listItem = {{
                        _id: '34234234',
                        title: 'TestItem',
                        description: 'Test Item Description',
                        complete: CompleteState.INCOMPLETE
                    }}>
                <Story />
              </ListItemProvider>
            </UIProvider>
        ),
    ]
}

export default meta;

type Story = StoryObj<typeof SelectButtonComponent>

export const SelectListItemButton: Story = {
    
}
