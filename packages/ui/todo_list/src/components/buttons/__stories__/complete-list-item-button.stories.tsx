import React from 'react'
import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import {CompleteListItemButton as CompleteButtonComponent} from '../complete-list-item-button'
import {UIProvider, ListItemProvider} from '@ui/contexts'
import {CompleteState} from '@core/entities'
const meta: Meta<typeof CompleteButtonComponent> = {
    //title: 'design_system/Container',
    component: CompleteButtonComponent,
    tags: ['autodocs'],
    
}

export default meta;

type Story = StoryObj<typeof CompleteButtonComponent>

export const CompleteListItemButton: Story = {
    args:{
        text: 'Button',
        size: 'sm',
        buttonStyle: 'primary',
    },
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
