import { render } from "solid-js/web";
import { ThemeProvider } from 'solid-styled-components';
import { Router, Route } from 'solid-app-router';
import routes from './router';
import { themes } from './utils/themeConfig';
import "./assets/css/main.css"
import './globalStyles';

render(
  () => (
    <Router routes={routes}>
      <ThemeProvider theme={themes.default}>
        <Route />
      </ThemeProvider>
    </Router>
  ),
  document.getElementById('root') as any
);
