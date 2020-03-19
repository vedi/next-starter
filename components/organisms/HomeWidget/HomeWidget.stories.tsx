import React from 'react';
import { action } from '@storybook/addon-actions';
import { HomeWidget } from './HomeWidget';

export default {
  title: 'HomeWidget',
  component: HomeWidget,
};

export const Simple = () => (
  <HomeWidget counter={1} onClickIncrease={action('onClickIncrease')} />
);
