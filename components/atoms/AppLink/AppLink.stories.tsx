import React from 'react';
import { AppLink } from './AppLink';

export default {
  title: 'AppLink',
  component: AppLink,
};

export function Simple() {
  return <AppLink href="/">Test</AppLink>;
}
