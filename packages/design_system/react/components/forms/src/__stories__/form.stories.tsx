import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Form as FormComponent } from '../presentation/Form'
import {Input} from '../presentation/Input'
import { Fieldset } from '../presentation/Fieldset';
const meta: Meta<typeof FormComponent> = {
    //title: 'design_system/Container',
    component: FormComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof FormComponent>

const FormBody = () => {
    return(
        <Fieldset>
            <Input placeholder = {'Write here'} name = {'TestInput'}register = {() => {}}/>
            <Input placeholder = {'Write here Also'} name = {'TestInput2'}register = {() => {}}/>
        </Fieldset>
    )
}

export const Form: Story = {
    args: {
        children: <FormBody />,
        justifyButton: 'flex-end'
    }
}
