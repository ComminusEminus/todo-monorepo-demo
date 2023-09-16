import type { Meta, StoryObj } from '@storybook/react';
import {FormSubmissionButton as FormSubmissionButtonComponent} from '../presentation/FormSubmissionButton'

const meta: Meta<typeof FormSubmissionButtonComponent> = {
    //title: 'design_system/Container',
    component: FormSubmissionButtonComponent,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof FormSubmissionButtonComponent>

//background colored so it displays default is transparent 

const FormSubmissionButton: Story = {
    args:{
        justifyButton: 'flex-end', 
        alignButton: 'center'
    }
}
