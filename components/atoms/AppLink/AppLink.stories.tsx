import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

export default {
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

export const Default: ComponentStoryObj<typeof AppLink> = {
  args: {
    children: 'Link text',
    href: 'http://',
  },
};
