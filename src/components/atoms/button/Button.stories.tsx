import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';


const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ContainedButton: Story = {
  args: { 
    label: 'Button',
    color: 'primary',
    size: 'medium',
    variant: 'contained'
}};

export const OutlinedButton: Story = {
    args: { 
      label: 'Button',
      color: 'primary',
      size: 'medium',
      variant: 'outlined'
}};

export const TextButton: Story = {
    args: { 
      label: 'Button',
      color: 'primary',
      size: 'medium',
      variant: 'text'
}};
  
