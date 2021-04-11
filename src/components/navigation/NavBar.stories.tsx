import React from 'react';

import { TopBar, NavDrawer, DRAWER_WIDTH } from './NavBar';
import MiniDrawer from './MiniDrawer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { action } from '@storybook/addon-actions';

export default {
  title: 'navigation/NavBar',
};

export const Default = () => (
  <BrowserRouter>
    <NavDrawer mobileOpen={false}/>
  </BrowserRouter>
);

export const Mini = () => (
  <BrowserRouter>
    <MiniDrawer />
  </BrowserRouter>
);
