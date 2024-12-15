import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from '@mui/material'; 
import React from 'react';

const RadioWithDisplayName = React.forwardRef<HTMLButtonElement, RadioProps>((props, ref) => (
    <Radio ref={ref} {...props}/>
  ));
  
RadioWithDisplayName.displayName='Radio';

const meta = {
  title: 'Components/Atoms/Radio',
  component: RadioWithDisplayName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioWithDisplayName>;

export default meta;
type Story = StoryObj<typeof meta>;


export const CheckedRadio: Story = {
  args: { 
    color: 'secondary',
    size: 'medium',
    checked: true
}};

export const UncheckedRadio: Story = {
    args: { 
      color: 'secondary',
      size: 'medium',
      checked: false
  }};