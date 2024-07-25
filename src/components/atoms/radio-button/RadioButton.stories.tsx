import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './RadioButton';

const meta = {
  title: 'Components/Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

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