import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../src/themes/default';

export const decorators = [
  muiTheme([theme])
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
