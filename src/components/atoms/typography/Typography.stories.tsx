import type { Meta, StoryObj } from '@storybook/react';
import { Typography , TypographyProps } from '@mui/material';
import React from 'react';

const TypographyWithDisplayName = React.forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => (
  <Typography ref={ref} {...props}/>
));

TypographyWithDisplayName.displayName='Typography';

const meta = {
  title: 'Components/Atoms/Typography',
  component: TypographyWithDisplayName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyWithDisplayName>;

export default meta;
type Story = StoryObj<TypographyProps>;

export const H1: Story = {
  args: { 
    variant: 'h1',
    children: 'Typography'
}};

export const H2: Story = {
  args: { 
    variant: 'h2',
    children: 'Typography'
}};

export const H3: Story = {
  args: { 
    variant: 'h3',
    children: 'Typography'
}};

export const H4: Story = {
  args: { 
    variant: 'h4',
    children: 'Typography'
}};

export const H5: Story = {
  args: { 
    variant: 'h5',
    children: 'Typography'
}};

export const H6: Story = {
  args: { 
    variant: 'h6',
    children: 'Typography'
}};

export const Subtitle1: Story = {
  args: { 
    variant: 'subtitle1',
    children: 'Typography'
}};

export const Subtitle2: Story = {
  args: { 
    variant: 'subtitle2',
    children: 'Typography'
}};

export const Body1: Story = {
  args: { 
    variant: 'body1',
    children: 'Typography'
}};

export const Body2: Story = {
  args: { 
    variant: 'body2',
    children: 'Typography'
}};

export const Caption: Story = {
  args: { 
    variant: 'caption',
    children: 'Typography'
}};

export const Overline: Story = {
  args: { 
    variant: 'overline',
    children: 'Typography'
}};



