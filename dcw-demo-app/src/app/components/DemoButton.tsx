import * as React from 'react';
import { Button } from '@functions/dcw-react';

export const DemoButton = () => {
    return (
      <>
        <Button text="Primary Button" variant="primary" onClick={() => alert('Primary Clicked')} />
        <Button text="Secondary Button" variant="secondary" onClick={() => alert('Secondary Clicked')} />
        <Button text="Loading State" isLoading variant="primary" />
        <Button text="Disabled State" disabled variant="primary" />
      </>
    );
  };