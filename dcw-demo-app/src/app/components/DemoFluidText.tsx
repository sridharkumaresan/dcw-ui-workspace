import { FluidText } from '@functions/dcw-react';

const FluidTextDemo = () => (
  <div>
    <h3>vf griffel Solution</h3>
    <div style={{ display: 'grid', gap: '1rem' }}>
      <FluidText preset="Display" as="h1">
        Display
      </FluidText>
      <FluidText preset="LargeTitle">Large Title</FluidText>
      <FluidText preset="Title1">Title 1</FluidText>
      <FluidText preset="Title2">Title 2</FluidText>
      <FluidText preset="Title3">Title 3</FluidText>
      <FluidText preset="Subtitle1">Subtitle 1</FluidText>
      <FluidText preset="Subtitle2">Subtitle 2</FluidText>
      <FluidText preset="Subtitle2Stronger">Subtitle 2 Stronger</FluidText>
      <FluidText preset="Body1">Body 1</FluidText>
      <FluidText preset="Body1Strong">Body 1 Strong</FluidText>
      <FluidText preset="Body1Stronger">Body 1 Stronger</FluidText>
      <FluidText preset="Body2">Body 2</FluidText>
      <FluidText preset="Caption1Stronger">Caption 1 Stronger</FluidText>
    </div>
  </div>
);

export default FluidTextDemo;
