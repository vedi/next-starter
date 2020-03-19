import { configure, addDecorator } from '@storybook/react';

import { Provider } from '../components/Provider';

configure(require.context('../components', true, /\.stories\.tsx?$/), module);

addDecorator(StoryFn => (
  <Provider>
    <StoryFn/>
  </Provider>
));
