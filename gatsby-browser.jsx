import '@fontsource/aileron';
import '@fontsource/aileron/400.css';
import '@fontsource/aileron/700.css';
import '@fontsource/aileron/800.css';

import { ThemeProvider } from './src/components/ContextProviders/ThemeProvider';
import { GlobalStyle } from './src/components/Layout/sharedStyles/globalStyles';

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <ThemeProvider>{element}</ThemeProvider>
  </>
);
