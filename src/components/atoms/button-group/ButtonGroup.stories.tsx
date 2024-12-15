import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';


const meta = {
  title: 'Components/Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ContainedButtonGroup: Story = {
  args: { 
    buttonLabels: ['label', 'label', 'label'],
    color: 'secondary',
    orientation: 'horizontal',
    variant: 'contained'
}};

export const OutlinedButtonGroup: Story = {
  args: { 
    buttonLabels: ['label', 'label', 'label'],
    color: 'secondary',
    orientation: 'horizontal',
    variant: 'outlined'
}};

export const TextButtonGroup: Story = {
  args: { 
    buttonLabels: ['label', 'label', 'label'],
    color: 'secondary',
    orientation: 'horizontal',
    variant: 'text'
}};

