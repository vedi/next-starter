import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { CounterWidget } from './CounterWidget';
import { Button } from '../../atoms/Button';

export default {
  component: CounterWidget,
} as ComponentMeta<typeof CounterWidget>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    counter: 1,
  },
};
