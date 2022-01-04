import React from 'react';
import { DefaultTemplate } from './DefaultTemplate';

export default {
  title: 'DefaultTemplate',
  component: DefaultTemplate,
};

export function Simple() {
  return (
    <DefaultTemplate>
      Content
    </DefaultTemplate>
  );
}
