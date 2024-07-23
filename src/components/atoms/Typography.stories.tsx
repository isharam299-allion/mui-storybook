import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../theme';


const meta = {
  title: 'Components/Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const H1: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Typography variant='h1'>
                H1
            </Typography>
        </ThemeProvider>
    ),
}

export const H2: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Typography variant='h2'>
                H2
            </Typography>
        </ThemeProvider>
    ),
}
export const H3: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Typography variant='h3'>
                H3
            </Typography>
        </ThemeProvider>
    ),
}
export const H4: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Typography variant='h4'>
                H4
            </Typography>
        </ThemeProvider>
    ),
}
export const H5: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Typography variant='h5'>
                H5
            </Typography>
        </ThemeProvider>
    ),
}
export const H6: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <Typography variant='h6'>
                H6
            </Typography>
        </ThemeProvider>
    ),
}
