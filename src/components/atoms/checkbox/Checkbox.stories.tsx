import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '@mui/material';
import React from 'react';

const CheckboxWithDisplayName = React.forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => (
  <Checkbox ref={ref} {...props}/>
));

CheckboxWithDisplayName.displayName='Checkbox';

const meta = {
  title: 'Components/Atoms/Checkbox',
  component: CheckboxWithDisplayName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxWithDisplayName>;

export default meta;
type Story = StoryObj<typeof meta>;


export const CheckedCheckbox: Story = {
  args: { 
    color: 'primary',
    size: 'medium',
    checked: true
}};

export const UncheckedCheckbox: Story = {
    args: { 
      color: 'primary',
      size: 'medium',
      checked: false
  }};