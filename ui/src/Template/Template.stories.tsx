import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input  from './Template';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "@1take/Input",
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label:{
      control : 'text',
      description: 'Label for the input',
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};
export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
}

