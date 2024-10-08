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
  args: { variant: 'red', children: 'Button' },
};

export const Secondary: Story = {
  args: { variant: 'blue', children: 'Button' },
};

export const WithOnClick: Story = {
  args: { variant: 'red', children: 'Button', onClick: () => alert('Clicked!') },
};

export const Disabled: Story = {
  args: { variant: 'red', children: 'Button', disabled: true },
};