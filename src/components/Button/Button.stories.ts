import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'dilly-ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Click me' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Click me' },
};

export const WithOnClick: Story = {
  args: { variant: 'primary', children: 'Click me', onClick: () => alert('Clicked!') },
};

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Click me', disabled: true },
};