import { FluidText } from './FluidText';
import { TypographyProvider } from './../../context/TypographyProvider.js';
import { getTypographyPreset } from './../../preset/presetMap.js';

export default {
  title: 'Typography/FluidText',
  component: FluidText,
};

export const DefaultPresets = () => (
  <TypographyProvider tokens={getTypographyPreset('default')}>
    <div style={{ display: 'grid', gap: '1rem' }}>
      <FluidText preset="Display">Display</FluidText>
      <FluidText preset="Title1">Title1</FluidText>
      <FluidText preset="Body1">Body1</FluidText>
    </div>
  </TypographyProvider>
);

export const MarketingPresets = () => (
  <TypographyProvider tokens={getTypographyPreset('marketing')}>
    <div style={{ display: 'grid', gap: '1rem' }}>
      <FluidText preset="Display">Display</FluidText>
      <FluidText preset="Title1">Title1</FluidText>
      <FluidText preset="Body1">Body1</FluidText>
    </div>
  </TypographyProvider>
);
