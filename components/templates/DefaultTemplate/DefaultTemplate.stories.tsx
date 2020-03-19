import React from 'react';
import { DefaultTemplate } from './DefaultTemplate';

export default {
  title: 'DefaultTemplate',
  component: DefaultTemplate,
};

export const Simple = () => (
  <DefaultTemplate>
    Content
  </DefaultTemplate>
);
