import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { HomeWidget } from './HomeWidget';

export default {
  component: HomeWidget,
} as ComponentMeta<typeof HomeWidget>;

export const Default: ComponentStoryObj<typeof HomeWidget> = {
  args: {
    counter: 1,
  },
};
