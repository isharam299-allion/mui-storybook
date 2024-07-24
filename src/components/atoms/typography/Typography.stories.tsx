import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';


const meta = {
  title: 'Components/Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;


export const H1: Story = {
  args: { 
    variant: 'h1',
    text: 'Typography'
}};

export const H2: Story = {
  args: { 
    variant: 'h2',
    text: 'Typography'
}};

export const H3: Story = {
  args: { 
    variant: 'h3',
    text: 'Typography'
}};

export const H4: Story = {
  args: { 
    variant: 'h4',
    text: 'Typography'
}};

export const H5: Story = {
  args: { 
    variant: 'h5',
    text: 'Typography'
}};

export const H6: Story = {
  args: { 
    variant: 'h6',
    text: 'Typography'
}};

export const Subtitle1: Story = {
  args: { 
    variant: 'subtitle1',
    text: 'Typography'
}};

export const Subtitle2: Story = {
  args: { 
    variant: 'subtitle2',
    text: 'Typography'
}};

export const Body1: Story = {
  args: { 
    variant: 'body1',
    text: 'Typography'
}};

export const Body2: Story = {
  args: { 
    variant: 'body2',
    text: 'Typography'
}};

export const Caption: Story = {
  args: { 
    variant: 'caption',
    text: 'Typography'
}};

export const Overline: Story = {
  args: { 
    variant: 'overline',
    text: 'Typography'
}};



