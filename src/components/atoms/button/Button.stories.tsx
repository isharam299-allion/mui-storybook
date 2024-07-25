import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@mui/material';
import React from 'react';

const ButtonWithDisplayName = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <Button ref={ref} {...props}/>
));

ButtonWithDisplayName.displayName='Button';

const meta = {
  title: 'Components/Atoms/Button',
  component: ButtonWithDisplayName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonWithDisplayName>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ContainedButton: Story = {
  args: { 
    children: 'Button',
    color: 'primary',
    size: 'medium',
    variant: 'contained'
}};

export const OutlinedButton: Story = {
    args: { 
      children: 'Button',
      color: 'primary',
      size: 'medium',
      variant: 'outlined'
}};

export const TextButton: Story = {
    args: { 
      children: 'Button',
      color: 'primary',
      size: 'medium',
      variant: 'text'
}};
  
