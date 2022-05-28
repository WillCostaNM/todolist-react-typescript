import React from 'react';
import { Theme } from 'themes';
import { AppRoutes } from 'routes';
import { GlobalStyle } from 'themes';

export const App = () => {
  return(
    <Theme>
      <GlobalStyle/>
      <AppRoutes />
    </Theme>
  )
}
