import { render } from '@testing-library/react';

import DcwReact from './dcw-react';

describe('DcwReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DcwReact />);
    expect(baseElement).toBeTruthy();
  });
});
