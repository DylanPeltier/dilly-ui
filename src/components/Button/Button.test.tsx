import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for matchers
import Button from './Button'; // Adjust the path to the Button component

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button data-testid="btn" />);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
  });

  it('fires click event', () => {
    const fn = jest.fn();
    render(<Button onClick={fn} data-testid="btn" />);
    const button = screen.getByTestId('btn');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('renders correct classes', () => {
    render(<Button variant='red' data-testid="p-btn" />);
    const pButton = screen.getByTestId('p-btn');
    expect(pButton).toHaveClass('dillyui-button');
  });
});
