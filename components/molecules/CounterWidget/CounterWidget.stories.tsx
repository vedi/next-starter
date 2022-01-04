import React from 'react';
import { action } from '@storybook/addon-actions';
import { CounterWidget } from './CounterWidget';

export default {
  title: 'CounterWidget',
  component: CounterWidget,
};

export function Simple() {
  return <CounterWidget counter={1} onClickIncrease={action('onClickIncrease')} />;
}
