import {
  Title1,
  Title2,
  Subtitle1,
  Body2,
  Caption1Stronger,
} from '@fluentui/react-components';
import { v8 } from '@functions/dcw-react'; // or 'dcw-react' if re-exported

const DemoTypography = () => {
  const getStyle = v8.useTypographyStyle();

  return (
    <div>
      <h3>v8 getStyle Solution</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Title1 style={getStyle('Title1')}>Responsive Title 1</Title1>
        <br />
        <Title2 style={getStyle('Title2')}>Responsive Title 2</Title2>
        <br />
        <Subtitle1 style={getStyle('Subtitle1')}>Responsive Subtitle</Subtitle1>
        <br />
        <Body2 style={getStyle('Body2')}>
          This is a body text example using responsive typography applied via
          dcw-react library.
        </Body2>
        <br />
        <Caption1Stronger style={getStyle('Caption1Stronger')}>
          Caption with responsive adjustments
        </Caption1Stronger>
      </div>
    </div>
  );
};

export default DemoTypography;
