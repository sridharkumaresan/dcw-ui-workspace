// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { DemoButton } from './components/DemoButton';
import DemoTypography from './components/DemoTypography';
import { TypographyStyleProvider } from '@functions/dcw-react'; // or 'dcw-react' if re-exported


export function App() {
  return (
    <TypographyStyleProvider>
      <div>
        <h1>DCW Demo App</h1>
        <DemoButton />
        <br />
        <h2>Typography Demo</h2>
        <div style={{ padding: '2rem' }}>
          <DemoTypography />
        </div>
      </div>
    </TypographyStyleProvider>
  );
}

export default App;
