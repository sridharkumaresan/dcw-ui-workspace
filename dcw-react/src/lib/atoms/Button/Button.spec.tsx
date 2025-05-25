import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders primary button with text', () => {
    const { getByText } = render(<Button text="Click Me" variant="primary" />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('renders secondary button with text', () => {
    const { getByText } = render(<Button text="Submit" variant="secondary" />);
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('disables button when `disabled` prop is true', () => {
    const { getByRole } = render(<Button text="Disabled" disabled />);
    expect(getByRole('button')).toBeDisabled();
  });

  it('displays loading text when `isLoading` is true', () => {
    const { getByText } = render(<Button text="Save" isLoading />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click" onClick={handleClick} />);
    fireEvent.click(getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
