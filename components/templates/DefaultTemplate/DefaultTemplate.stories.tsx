import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { DefaultTemplate } from './DefaultTemplate';

export default {
  component: DefaultTemplate,
} as ComponentMeta<typeof DefaultTemplate>;

export const Default: ComponentStoryObj<typeof DefaultTemplate> = {
  args: {
    children: 'Content',
  },
};
