import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

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