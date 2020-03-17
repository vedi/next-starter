import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../lib/store';
import theme from '../theme';

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
}
