// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { DemoButton } from './components/DemoButton';
import DemoTypography from './components/DemoTypography';
import { v8 } from '@functions/dcw-react'; // or 'dcw-react' if re-exported
import FluidTextDemo from './components/DemoFluidText';
import {
  TypographyProvider,
  getTypographyPreset,
} from '@functions/dcw-react';

export function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <h1>DCW Demo App</h1>
      <DemoButton />
      <br />
      <h2>Typography Demo</h2>
      <div style={{ padding: '2rem' }}>
        <v8.TypographyStyleProvider>
          <DemoTypography />
        </v8.TypographyStyleProvider>
      </div>
      <div style={{ padding: '2rem' }}>
        <TypographyProvider tokens={getTypographyPreset('marketing')}>
          <FluidTextDemo />
        </TypographyProvider>
      </div>
    </FluentProvider>
  );
}

export default App;
